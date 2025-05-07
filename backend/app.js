const express = require('express');
const cors = require('cors');
// const tiresRoutes = require('./routes/tires');
// const brandsRoutes = require('./routes/brands');
const routes = require('./routes/routes');

const HOST = 'http://localhost';
const PORT = 3000;

const app = express();

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
