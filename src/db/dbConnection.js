const mongoose = require("mongoose");

const dbConnection = () => {
    try {
        mongoose.connect(
            "mongodb+srv://vishgood1912:2kKi0KuvQnbCpa1o@cluster0vish.kbxvqrx.mongodb.net/product&cart",
        ),
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log("Database connected successfully !");
    } catch (error) {
        console.log("ERROR !", error);
    }
}

module.exports = { dbConnection }