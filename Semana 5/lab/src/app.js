const express = require("express");
const petRoutes = require("./routes/pets");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/pets", petRoutes);

app.listen(port, () => {
  console.log(`Pet store app listening at http://localhost:${port}`);
});
