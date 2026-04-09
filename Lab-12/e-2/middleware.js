const express = require('express');
const app = express();

const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

const adityaAuth = (req, res, next) => {
    console.log('Executing Aditya Auth Middleware');
    next();
};

app.use(requestLogger);

app.get('/', adityaAuth, (req, res) => {
    res.send('Welcome, Aditya!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Middleware server running on port 3000');
});