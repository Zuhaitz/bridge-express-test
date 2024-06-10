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
  res.status(201).send("product created");
});

app.put("/products", (req, res) => {
  res.status(201).send("product updated");
});

app.delete("/products", (req, res) => {
  res.status(410).send("product deleted");
});

app.get("/users", (req, res) => {
  res.status(200).send("user list");
});

app.post("/users", (req, res) => {
  res.status(201).send("user created");
});

app.put("/users", (req, res) => {
  res.status(201).send("user updated");
});

app.delete("/users", (req, res) => {
  res.status(410).send("user deleted");
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
