const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    
    password:{
        type: String,
        require: true
    },
    mail:{
        type: String,
        require: true
    },
    date:{
        type: String,
       default: Date.now
    }



})
const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = User