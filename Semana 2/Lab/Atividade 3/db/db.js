const db = require("../models/index");

const connectToDatabase = async () => {
  try {
    await db.sequelize.sync();
    console.log("Successfully connected to database!");
  } catch (error) {
    console.error("Failed to connect to database: ", error);
  }
};

module.exports = connectToDatabase;
