const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://tilak:NgHtJdAPmOCVabIV@cluster0.r2trz.mongodb.net/RolebaseAuth?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to databse");
  })
  .catch((e) => {
    console.log("error while connecting Mobgodb", e);
  });

module.exports = { mongoose };
