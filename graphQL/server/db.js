const mongoose = require("mongoose");

const connect = async (DB_HOST) => {
  try {
    await mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error(err);
    console.log(
      "MongoDB connection error, please make sure MongoDB is running"
    );
    process.exit();
  }
};

const close = () => {
  mongoose.connection.close();
};

module.exports = { connect, close };
