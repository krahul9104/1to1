const bcrypt = require("bcrypt");
const Department = require("../models/department");
const DepartmentType = require("../models/departmentType");

exports.deptType_get_all = (req, res, next) => {
    DepartmentType.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                departmentType: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.deptType_post = (req, res, next) => {
    console.log(JSON.stringify(req.body));
    Department.findById(req.body.deptId)
        .then(data => {
            if (!data) res.status(500).json({ error: "Organization not found" });
            const inputJson = req.body;
            const deptType = new DepartmentType(inputJson);
            return deptType.save();
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.deptType_patch = (req, res, next) => {
    const id = req.params.departmentTypeId;
    const inputJsonObj = req.body;
    if (inputJsonObj.hasOwnProperty("_id")) delete inputJsonObj["_id"];

    DepartmentType.update({ _id: id }, { $set: inputJsonObj })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.deptType_get_by_ID = (req, res, next) => {
    const id = req.params.departmentTypeId;
    DepartmentType.findById(id)
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

exports.deptType_delete_by_ID = (req, res, next) => {
    const id = req.params.departmentTypeId;
    DepartmentType.remove({ _id: id })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ err: err });
        });
};

exports.deptType_get_by_deptID = (req, res, next) => {
    const deptId = req.query.deptId;
    DepartmentType.findById({ deptId: deptId })
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