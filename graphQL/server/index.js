const mongoose = require("mongoose");

module.exports = {
  connect: (DB_HOST) => {
    // Set strictQuery to false to prevent deprecation warning
    mongoose.set("strictQuery", false);

    // Use new server discovery and monitoring engine
    mongoose.set("useUnifiedTopology", true);

    // Use new URL string parser
    mongoose.set("useNewUrlParser", true);

    // Use findOneAndUpdate() instead of findAndModify()
    mongoose.set("useFindAndModify", false);

    // Use createIndex() instead of ensureIndex()
    mongoose.set("useCreateIndex", true);

    // Connect to MongoDB
    mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    // Log an error if the connection fails
    mongoose.connection.on("error", (err) => {
      console.error(err);
      console.log(
        "MongoDB connection error, please make sure MongoDB is running"
      );
      process.exit();
    });
  },
  close: () => {
    mongoose.connection.close();
  },
};
