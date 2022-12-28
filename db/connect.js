const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// uri =
//   "mongodb+srv://meet2aman:Am654321@api.qyayto9.mongodb.net/API?retryWrites=true&w=majority";

const connectDB = (uri) => {
  console.log("connectDB");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
