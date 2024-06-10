const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome!!! :)");
});

app.get("/products", (req, res) => {
  res.status(200).send("product list");
});

app.post("/products", (req, res) => {
  res.status(200).send("product created");
});

app.put("/products", (req, res) => {
  res.status(200).send("product updated");
});

app.delete("/products", (req, res) => {
  res.status(200).send("product deleted");
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
