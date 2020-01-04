// في هذا الملف ، قم بإعداد وحدة المستخدم (المدرس) الخاصة بك | in this file, set up your user module

// 1. قم باستيراد مكتبة moongoose | import the mongoose library
const { schema, model } = require("mongoose");
// 2. قم بتحديد مخطط المدرس | start defining your user schema
const { hashPassword } = require("../helper");
const shortid = require("shortid")

const TeacherSchema = new schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  salt: String
});

TeacherSchema.pre("save", function(next){
    if(!this.salt){
        this.salt = shortid.generate()
    }
    if(this.password){
        this.password = hashPassword(this.password, this.salt)
    }
    next()
})

// 3. إنشاء نموذج المدرس | create  the user model
const TeacherModel = model("Teacher", TeacherSchema);
// تخزين كلمة السر بعد عمل الهاش

// 4. تصدير الوحدة | export the module
