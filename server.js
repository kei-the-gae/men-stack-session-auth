const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');

// set port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : '3000';

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

// middleware to parse url-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// middleware for using http verbs such as put or delete
app.use(methodOverride('_method'));
// morgan for logging http requests
app.use(morgan('dev'));

app.get('/', async (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`Connected to server on port ${port}`);
});