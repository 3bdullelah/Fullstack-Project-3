// في هذا الملف ، قم بإعداد طرق التطبيق الخاصة بك | in this file, set up your application routes

// 1. استيراد وحدةالمدرس | import the teacher module
// 2. استيراد وحدة الطالب | import the student module
// 3. تسجيل مدرس جديد و تخزين بياناته | new teacher sign up
// 4. تسجيل دخول مدرس و ارجاع التوكن | teacher login and response with jwt token
const route = require("express").Router();
const teacher = require("./teacher");
const student = require("./student");
const checkToken = require("./checkToken");

// 5. إعداد طرق مختلفة | setup the different routes (get, post, put, delete)

route.get('/',(req, res) => {
    res.send("welcome To the Fullstack-Project-3");
})

route.use(teacher)
route.use(checkToken);
route.use(student);




// 3. تصدير الوحدة | export the module
module.exports = route;