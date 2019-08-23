const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Employee = require('../models/employees');


router.get('/', (req, res, next) => {
    Employee.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                employees: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log("data" + err);
            res.status(200).json({ "error": err });
        });
});

router.post('/', (req, res, next) => {
    const inputJsonObj = {};
    if (req.body) {
        for (const [key, value] of Object.entries(req.body)) {
            inputJsonObj[key] = value;
        }
    }
    const employee = new Employee(inputJsonObj);
    employee.save().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ "error": err });
    });
});

router.patch('/:employeeId', (req, res, next) => {
    const employeeId = req.params.employeeId;
    const inputJsonObj = {};
    if (req.body) {
        for (const [key, value] of Object.entries(req.body)) {
            inputJsonObj[key] = value;
        }
    }
    Employee.update({ _id: employeeId }, { $set: inputJsonObj }).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({ "error": err });
    });
});

router.get('/:employeeId', (req, res, next) => {
    const employeeId = req.params.employeeId;
    Employee.findById(employeeId)
        .exec()
        .then(data => {
            console.log("data" + data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("data" + err);
            res.status(200).json({ "error": err });
        });
});

router.delete('/:employeeId', (req, res, next) => {
    const employeeId = req.params.employeeId;
    Employee.remove({ _id: employeeId })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ 'err': err });
        });
});

module.exports = router;