const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const routes = require('./routes/routes');
const authRoutes = require('./routes/authentication');

const HOST = 'http://localhost';
const PORT = 3000;

const app = express();

// ✅ Middleware: Parse cookies from incoming requests
app.use(cookieParser());

// CORS: Allow requests from Vite frontend
app.use(
  cors({
    origin: 'http://localhost:5173', // or '*' for all origins (not recommended for production)
    credentials: true,
  })
);

app.use(express.json());
// Middleware to parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({extended: true}));

// ROUTES
app.use('/api/auth', authRoutes);

app.use(routes);

// HANDLE IMAGES
app.use('/images', express.static('public/images'));

app.use('/', (req, res, next) => {
  console.log('HOME');
});

app.listen(PORT, () => {
  const appUrl = `${HOST}:${PORT}`;
  console.log(`Server running on \x1b[34m${appUrl}\x1b[0m`);
});
