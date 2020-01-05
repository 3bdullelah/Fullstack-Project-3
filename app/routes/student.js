// 2. استيراد وحدة الطالب | import the student module
const route = require("express").Router();
const Student = require("../models/Student");

// add student data
route.post("/student", (req,res) => {
    const newStudent = Student({
      name: req.body.name,
      email: req.body.email,
      birthday: req.body.birthday,
      city: req.body.city
    });
    newStudent
    .save()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err))
});

// show all students
route.get("/student", (req, res) =>{
    Student.find({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
})

// delete student by using his id
route.delete("/student/:id", (req, res) => {
  Student.deleteOne({ _id: req.params.id })
    .then(() => res.json({
        message: `The Student [${req.params.name}] has been deleted.`
      }))
    .catch(err => res.status(500).json(err));
});

// update student by using his id
route.put('/posts/:id', (req,res) =>{
    Student.update(
      { _id: req.params.id },
      {
      name: req.body.name,
      email: req.body.email,
      birthday: req.body.birthday,
      city: req.body.city
      }
    )
      .then(() =>
        res.json({
          message: `The Student with id [${req.params.id}] has been updated.`,
          name: `The updated Title is ${req.body.name}`,
          email: `The updated Title is ${req.body.email}`,
          birthday: `The updated Title is ${req.body.birthday}`,
          city: `The updated description is ${req.body.city}`
        })
      )
      .catch(err => res.status(500).json(err));


module.exports = route;