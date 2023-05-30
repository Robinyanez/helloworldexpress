const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = 'mongodb://184.73.86.23:27017/admin';
    mongoose.connect(DB_URI,{
        user: "admin",
        pass: "Passwd123",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {connected = true;})
    .catch (err => {connected = false;});
};

module.exports = dbConnect