const express = require("express");
const router = require("./routes/router");
const app = express();
const connectToDatabase = require("./db/db");

app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3000;

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
