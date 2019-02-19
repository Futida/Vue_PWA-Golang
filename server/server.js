const express = require('express');

const app = express();

// package for working with file and directory
const path = require('path');

// body parsing middleware
const bodyParser = require('body-parser');

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
const cors = require('cors');

const todoRoutes = require('./router/router');

//logging middleware for Node
const logger = require('morgan');

// Mongoose is an official MongoDB library built for manipulating MongoDB databases in Node.
const mongoose = require('mongoose');

// config MongoDB
const config = require('./constants/configDB');

// Connect to database
mongoose.connect(config.DB, { useMongoClient: true });

const port = config.APP_PORT || 4000;

app.use(logger('tiny'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', todoRoutes);

app.use(function(req, res, next) {
    res.status(404);
    console.log('Not found URL: %s', req.url);
    res.send({ error: 'Not found' });
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});