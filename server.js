const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });

const app = express();

app.get("/", (req, res) => res.send("Hello World"));

const PORT =
  process.env.NODE_ENV && process.env.NODE_ENV == "production"
    ? process.env.PORT
    : 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port: ${PORT}`);
});
