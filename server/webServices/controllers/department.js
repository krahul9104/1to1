const bcrypt = require("bcrypt");
const Department = require("../models/department");
const Organization = require("../models/organization");

exports.dept_get_all = (req, res, next) => {
    Department.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                department: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.dept_post = (req, res, next) => {
    console.log(JSON.stringify(req.body));
    Organization.findById(req.body.orgId)
        .then(data => {
            if (!data) res.status(500).json({ error: "Organization not found" });
            const inputJson = req.body;
            const dept = new Department(inputJson);
            return dept.save();
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.dept_patch = (req, res, next) => {
    const deptId = req.params.departmentId;
    const inputJsonObj = req.body;
    if (inputJsonObj.hasOwnProperty("_id")) delete inputJsonObj["_id"];

    Department.update({ _id: deptId }, { $set: inputJsonObj })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.dept_get_by_ID = (req, res, next) => {
    const deptId = req.params.departmentId;
    Department.findById(deptId)
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

exports.dept_delete_by_ID = (req, res, next) => {
    const deptId = req.params.departmentId;
    Employee.remove({ _id: deptId })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ err: err });
        });
};

exports.dept_get_by_Org_ID = (req, res, next) => {
    const orgId = req.query.orgId;
    Department.find({ orgId: orgId })
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