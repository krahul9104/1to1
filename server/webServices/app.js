const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//use process.env.MONGO_ATLAS_PW -set the password and get from servers
mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW + "@restapidb-pudaf.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //instead on *we can specify any url
    res.header(
        'Access-Control-Allow-Headers',
        "Origin,X-Requested,Content-Type,Accept,Authorization"
    );
    if (res.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,GET,PATCH')
        return res.status(200).json({});
    }
    next();
});

const employeeRoute = require('../webServices/routes/employees');
const orgRoute = require('../webServices/routes/organization');
const goalRoute = require('../webServices/routes/goals');
//const orgRoute = require('./api/routes/organizations');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes which handle requests
app.use('/employees', employeeRoute);
app.use('/organization', orgRoute);
app.use('/goals', goalRoute);

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: "Error :" + error.message
    });
});

module.exports = app;