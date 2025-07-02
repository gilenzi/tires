const Users = require('./users');

class Authentication {
  static async canUserLogIn(email, password) {
    if (!email || !password) {
      throw new Error('Email and password must be filled.');
    }

    const user = await Users.findUserByName(email, password);
    if (!user) {
      return null;
    }

    return {
      user_id: user.user_id,
      email: user.email,
      name: user.name,
      role: user.role?.name,
      last_login: user.last_login,
    };
  }
}

module.exports = Authentication;
