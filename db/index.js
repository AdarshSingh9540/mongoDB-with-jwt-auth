const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Adarsh:singh9540@cluster0.yju1yru.mongodb.net/course_selling_app2');

const AdminSchema = new mongoose.Schema({
   username : String,
   password : String
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchaseCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    imgLink : String,
    description : String,
    price : String
});

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}