// 4. تسجيل دخول مدرس و ارجاع التوكن | teacher login and response with jwt token
const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).send("You have no Permission!")
    }
    const decodedToken = jwt.decode(token)
    if(!decodedToken){
        return res.status(401).send("You have no Permission!");
    }
    Teacher.findOne({ _id: decodedToken.sub })
      .then(() => next())
      .catch(() => res.status(401).send("You have no Permission!"));
}