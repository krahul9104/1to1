const bcrypt = require("bcrypt");
const Employee = require("../models/employees");
const Organization = require("../models/organization");

exports.emp_get_all = (req, res, next) => {
    Employee.find()
        .populate('orgId', '_id name')
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                employees: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });

    /*Employee.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                employees: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });*/
};

exports.emp_post = (req, res, next) => {
    Organization.findById(req.body.orgId)
        .then(data => {
            if (!data) res.status(500).json({ error: 'Organization not found' });
            const inputJson = req.body;
            inputJson['userName'] = inputJson['firstName'] + inputJson['lastName'];
            const employee = new Employee(inputJson);
            return employee.save();
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.emp_patch = (req, res, next) => {
    const employeeId = req.params.employeeId;
    const inputJsonObj = req.body;
    if (inputJsonObj.hasOwnProperty("_id")) delete inputJsonObj["_id"];

    Employee.update({ _id: employeeId }, { $set: inputJsonObj })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.emp_get_by_ID = (req, res, next) => {
    const employeeId = req.params.employeeId;
    Employee.findById(employeeId)
        .exec()
        .then(data => {
            console.log("data" + data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.log("data" + err);
            res.status(200).json({ error: err });
        });
};

exports.emp_delete_by_ID = (req, res, next) => {
    const employeeId = req.params.employeeId;
    Employee.remove({ _id: employeeId })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ err: err });
        });
    /* const employeeId = req.params.employeeId;
     Employee.remove()
         .exec()
         .then(data => {
             res.status(200).json(data);
         })
         .catch(err => {
             res.status(500).json({ err: err });
         });*/
};