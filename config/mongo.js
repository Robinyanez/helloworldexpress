const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = 'mongodb://52.23.159.202:27017/admin';
    mongoose.connect(DB_URI,{
        user: "admin",
        pass: "Robyanez123",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {connected = true;})
    .catch (err => {connected = false;});
};

module.exports = dbConnect