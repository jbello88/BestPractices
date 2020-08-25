const mongoose = require("mongoose");

const connectWithDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost/nodejsauth", {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.error("Could not connect to MongoDB... " + error);
  }
};

module.exports = connectWithDb;
