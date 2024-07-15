const sequelize = require("./config");

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database!");
  } catch (error) {
    console.error("Failed to connect to database: ", error);
  }
};

module.exports = connectToDatabase;
