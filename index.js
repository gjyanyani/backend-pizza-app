const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API...");
});

app.get("/products", (req, res) => {
  res.send([2, 3, 4]);
});

const port = process.env.PORT || 5425;

app.listen(port, () => {
  console.log(`Server is running on port ${port}  `);
});
