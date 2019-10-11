const bcrypt = require("bcrypt");
const Department = require("../models/department");
const Designation = require("../models/designation");

exports.designation_get_all = (req, res, next) => {
    Designation.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                designation: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.designation_post = (req, res, next) => {
    console.log(JSON.stringify(req.body));
    Department.findById(req.body.deptId)
        .then(data => {
            if (!data) res.status(500).json({ error: "Organization not found" });
            const inputJson = req.body;
            const designation = new Designation(inputJson);
            return designation.save();
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.designation_patch = (req, res, next) => {
    const id = req.params.designationId;
    const inputJsonObj = req.body;
    if (inputJsonObj.hasOwnProperty("_id")) delete inputJsonObj["_id"];

    Designation.update({ _id: id }, { $set: inputJsonObj })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.designation_get_by_ID = (req, res, next) => {
    const id = req.params.designationId;
    Designation.findById(id)
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

exports.designation_delete_by_ID = (req, res, next) => {
    const id = req.params.designationId;
    Designation.remove({ _id: id })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ err: err });
        });
};

exports.designation_get_by_deptTypeID = (req, res, next) => {
    const deptTypeID = req.query.deptTypeID;
    Designation.findById({ deptTypeID: deptTypeID })
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