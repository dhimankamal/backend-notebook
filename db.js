const mongoose =require('mongoose');
const mongooseURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongooseURI , ()=>{
        console.log("suceessfully connected");
    })
}

module.exports = connectToMongo;