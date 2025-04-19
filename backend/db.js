const mongoose = require('mongoose');
// const  mongoURL= process.env.local_mongoURL
const mongoURL = "mongodb://localhost:27017/ShoesBrandDB";

mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("db connected" , mongoURL)
})

db.on('error', (err) => {
    console.log("db error",err)
})

db.on('disconnected', () => {
    console.log("db disconnected")
})


module.exports = db;