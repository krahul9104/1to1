const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const userController = require("../controllers/user.js");
const User = require("../models/user.js");

router.post("/signin", userController.signIn);

router.post("/signup", userController.signUp);

/*router.get("/", (req, res, next) => {
    User.find()
        .exec()
        .then(data => {
            const response = {
                count: data.length,
                user: data
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});*/

/*router.delete("/", (req, res, next) => {
    User.deleteMany()
        .exec()
        .then(data => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});*/

module.exports = router;