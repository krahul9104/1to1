const bcrypt = require("bcrypt");
const Role = require("../models/role");

exports.role_get_all = (req, res, next) => {
    Role.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                role: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.role_post = (req, res, next) => {
    const role = new Goal(req.body);
    Role.save()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.role_patch = (req, res, next) => {
    const id = req.params.roleId;
    const inputJsonObj = req.body;
    if (inputJsonObj.hasOwnProperty("_id")) delete inputJsonObj["_id"];

    Role.update({ _id: id }, { $set: inputJsonObj })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.role_get_by_ID = (req, res, next) => {
    const id = req.params.roleId;
    Role.findById(id)
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

exports.role_delete_by_ID = (req, res, next) => {
    const id = req.params.RoleId;
    Role.remove({ _id: id })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ err: err });
        });
};