const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
//use process.env.MONGO_ATLAS_PW -set the password and get from servers
mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW + "@restapidb-pudaf.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
autoIncrement.initialize(db);

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

const user = require('../webServices/routes/user');
const employeeRoute = require('../webServices/routes/employees');
const orgRoute = require('../webServices/routes/organization');
const deptRoute = require('../webServices/routes/department');
const deptTypeRoute = require('../webServices/routes/departmentType');
const designationRoute = require('../webServices/routes/designation');
const roleRoute = require('../webServices/routes/role');
const goalRoute = require('../webServices/routes/goals');
const oneonone = require('../webServices/routes/oneonone_review');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes which handle requests
app.use('/user', user);
app.use('/employees', employeeRoute);
app.use('/organization', orgRoute);
app.use('/department', deptRoute);
app.use('/departmentType', deptTypeRoute);
app.use('/designation', designationRoute);
app.use('/role', roleRoute);
app.use('/goals', goalRoute);
app.use('/oneonone', oneonone);

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