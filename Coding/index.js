const mongoose = require('mongoose');
const { Schema } = mongoose;

// mongodb connection
main().then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema); 

// User.findById("6782d0f357e0d340a9c32704")
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findOne({_id: "6782d0f357e0d340a9c32704"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.find({age: {$gt : 47}})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//Insert Many Data 

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Stark", email: "stark@gmail.com", age: 29},
// ]).then((res)=>{
//     console.log(res);
// });


// Insert One user info
// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user2
// .save()
// .then((res) =>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });