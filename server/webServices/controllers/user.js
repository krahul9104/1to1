const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

exports.signIn = (req, res, next) => {
    const req_email = req.body.email;
    User.find({ email: req_email })
        .exec()
        .then(data => {
            if (data.length < 1) {
                return res.status(401).json("Invalid Details");
            } else {
                bcrypt.compare(req_email + '_' + req.body.password, data[0].password, function(err, result) {
                    if (err) {
                        return res.status(401).json("Invalid Details");
                        console.log("user data fail");
                    }
                    if (result) {
                        const token = jwt.sign({ email: data[0].email, _id: data[0]._id },
                            "hello", { expiresIn: '1h' }
                        );
                        console.log("user data pass");
                        return res.status(200).json({ Message: "Login Successfully", token: token });
                    }
                });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.signUp = (req, res, next) => {
    const req_email = req.body.email;

    User.findOne({ email: req_email })
        .then(data => {
            if (data || req.body.password == '')
                return res.status(500).json({ error: 'Email Id is already Exist or Password is empty' });

            bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
                if (err) {
                    return res.status(500).json({ error: err });
                }
                const inputJson = {};
                inputJson["_id"] = req.body._id;
                inputJson["email"] = req_email;
                inputJson["active"] = true;
                inputJson["password"] = bcrypt.hashSync(req_email + '_' + req.body.password, 10);
                const user = new User(inputJson);
                return user.save();
            });
        })
        .then(result => {
            res.status(200).json("User is created Succesfully");
        })
        .catch(err => {
            res.status(500).json({ error: "Error while creating users" });
        });
};