const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Organization = require('../models/organization');


router.get('/', (req, res, next) => {
    Organization.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                organization: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
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
    const organization = new Organization(inputJsonObj);
    organization.save().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ "error": err });
    });
});

router.patch('/:organizationId', (req, res, next) => {
    const organizationId = req.params.organizationId;
    const inputJsonObj = {};
    if (req.body) {
        for (const [key, value] of Object.entries(req.body)) {
            inputJsonObj[key] = value;
        }
    }
    Organization.update({ _id: organizationId }, { $set: inputJsonObj }).then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({ "error": err });
    });
});


router.get('/:organizationId', (req, res, next) => {
    const organizationId = req.params.organizationId;
    Organization.findById(organizationId)
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(200).json({ "error": err });
        });
});

router.delete('/:organizationId', (req, res, next) => {
    const organizationId = req.params.organizationId;
    Organization.remove({ _id: organizationId })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ 'err': err });
        });
});

module.exports = router;