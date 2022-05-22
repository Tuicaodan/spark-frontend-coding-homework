const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const apiRoutes = require("./routes/api.route");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
