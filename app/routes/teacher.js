// 1. استيراد وحدةالمدرس | import the teacher module
const route = require("express").Router()
const jwt = require("jsonwebtoken")
const Teacher = require("../models/Teacher");
const { hashPassword } = require('../helper')

// add a new teacher
route.post("/teachers/register", (req, res) =>{
    const newTeacher = Teacher(req.body)
    newTeacher
    .save()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err))
})

//login
route.post("/teachers/login", (req, res) => {
  const {email, password} = req.body;
  Teacher.findOne({ email })
  .then(teacher =>{
      if(teacher.password === hashPassword(password, teacher.salt)){
          const token = jwt.sign({ sub: teacher._id}, teacher.salt, {expiresIn: 60 * 60 * 24 * 7})
          res.send(token)
      }else {
          res.status(401).send("Password is wrong")
      }
  })
  .catch(() => res.send("No Teacher Found"))
});