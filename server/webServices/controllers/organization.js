const Organization = require("../models/organization");

exports.org_get_all = (req, res, next) => {
    Organization.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                organizations: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.org_post = (req, res, next) => {
    const organization = new Organization(req.body);
    organization
        .save()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.org_patch = (req, res, next) => {
    const organizationId = req.params.organizationId;
    const inputJsonObj = req.body;
    if (inputJsonObj.hasOwnProperty("_id")) delete inputJsonObj["_id"];

    Organization.update({ _id: organizationId }, { $set: inputJsonObj })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.org_get_by_ID = (req, res, next) => {
    const organizationId = req.params.organizationId;
    Organization.findById(organizationId)
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.orgs_delete_by_ID = (req, res, next) => {
    const organizationId = req.params.organizationId;
    Organization.remove({ _id: organizationId })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ err: err });
        });
};