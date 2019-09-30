const Goal = require("../models/goals");

exports.goals_get_all = (req, res, next) => {
    Goal.find()
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

exports.goals_post = (req, res, next) => {
    const goal = new Goal(req.body);
    goal
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

exports.goals_patch = (req, res, next) => {
    const goalId = req.params.goalId;
    const inputJsonObj = req.body;
    if (inputJsonObj.hasOwnProperty("_id")) delete inputJsonObj["_id"];
    Goal.update({ _id: goalId }, { $set: inputJsonObj })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.goals_get_by_ID = (req, res, next) => {
    const goalId = req.params.goalId;
    Goal.findById(goalId)
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(200).json({ error: err });
        });
};

exports.goals_dalete_by_ID = (req, res, next) => {
    const goalId = req.params.goalId;
    Goal.remove({ _id: goalId })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ err: err });
        });
};