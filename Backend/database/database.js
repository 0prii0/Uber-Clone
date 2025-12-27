const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect(
    process.env.DB_CONNECT).then(() => {
      console.log("Connected to Databse");
    }).catch(err => console.log(err));
}


module.exports = connectToDatabase;
