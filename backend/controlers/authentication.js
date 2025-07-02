require('dotenv').config();
const jwt = require('jsonwebtoken');
const Authentication = require('../models/authentication');

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '15m'});
};

const generateRefreshToken = (user) => {
  return jwt.sign({user}, process.env.JWT_REFRESH_SECRET);
};

exports.login = async (req, res) => {
  const {username, password} = req.body;

  try {
    const user = await Authentication.canUserLogIn(username, password);
    if (!user) {
      return res.status(401).json({message: 'Invalid email or password'});
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    refreshTokens.push(refreshToken);

    console.log(refreshToken);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      path: '/api/auth', // ✅ Cookie will be sent to /api/auth/* routes
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({...user, accessToken});
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

exports.refresh = (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    return res.status(401).json('You are not authenticated');
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json('Refresh token is not valid!');
  }

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, data) => {
    if (err) {
      return res.status(403).json('Refresh token is invalid');
    }

    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(data.user);
    const newRefreshToken = generateRefreshToken(data.user);

    refreshTokens.push(newRefreshToken);

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      path: '/api/auth',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({accessToken: newAccessToken});
  });
};

exports.logout = (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

  res.clearCookie('refreshToken', {path: '/api/auth'});
  res.status(200).json({message: 'Logged out successfully'});
};
