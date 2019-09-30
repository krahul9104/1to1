const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decode = jwt.verify(token, "hello");
        req.UserData = decode;
        next();
    } catch (e) {
        return res.status(401).json("Invalid token ");
    }
};