const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
       
    },
    tag:{
        type: String,
        
    },
    date:{
        type: String,
       default: Date.now
    }



})
module.exports = mongoose.model('user', NotesSchema);