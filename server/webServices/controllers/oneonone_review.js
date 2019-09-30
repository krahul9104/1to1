const OneonOne_Review = require("../models/oneonone_review");

exports.oneonone_review_get_all = (req, res, next) => {
    OneonOne_Review.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                goals: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.oneonone_review_post = (req, res, next) => {
    const oneonOne_Review = new Goal(req.body);
    oneonOne_Review
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

exports.oneonone_review_patch = (req, res, next) => {
    const oneonOneId = req.params.oneonone_Id;
    const inputJsonObj = req.body;
    if (inputJsonObj.hasOwnProperty("_id")) delete inputJsonObj["_id"];
    Goal.update({ _id: oneonOneId }, { $set: inputJsonObj })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.oneonone_review_get_by_ID = (req, res, next) => {
    const oneonone_Id = req.params.oneonone_Id;
    OneonOne_Review.findById(oneonone_Id)
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(200).json({ error: err });
        });
};

exports.oneonone_review_delete_by_ID = (req, res, next) => {
    const oneonone_Id = req.params.oneonone_Id;
    OneonOne_Review.remove({ _id: oneonone_Id })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ err: err });
        });
};