const Organization = require("../models/organization");

exports.goals_get_all = (req, res, next) => {
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

exports.goals_post = (req, res, next) => {
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

exports.goals_patch = (req, res, next) => {
    const organizationId = req.params.organizationId;
    Organization.update({ _id: organizationId }, { $set: req.body })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.goals_get_by_ID = (req, res, next) => {
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

exports.goals_delete_by_ID = (req, res, next) => {
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