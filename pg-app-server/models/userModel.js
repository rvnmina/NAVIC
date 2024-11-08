// // const mongoose = require('mongoose');
// import mongoose from "mongoose";
// const Schema = mongoose.Schema;
// let userSchema = new Schema({
//    email: {
//       type: String,
//       required: true
//    },
//    password: {
//       type: String,
//       required: true
//    }
// },{
//    timestamps: true,
//    collection: 'users'
// })
// export const User = mongoose.model('User', userSchema);

// const mongoose = require("mongoose");
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", userSchema);

// module.exports = mongoose.model("user", userSchema);

// export default user;
