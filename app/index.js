//  استيراد المكتبات المطلوبة | import the required libraries
//  تأكد من تنزيل الوحدات المطلوبة | make sure to download the required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");

const mongoURI = "mongodb://localhost:27017/mongo-demo-db";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));


const route = express();

route.use(bodyParser.urlencoded({ extended: true }));
route.use(routes);


// لا تنسى تحديد وظيفة الخادم | don't forget to define the server function that listens to requests

const port = process.env.PORT || 5000;

route.listen(port, () => console.log(`server is running on port ${port}`));