const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

let products = {
  description: "Productos",
  items: [
    { id: 1, name: "Taza de Harry Potter", price: 300 },
    { id: 2, name: "FIFA 22 PS5", price: 1000 },
    { id: 3, name: "Figura Goku Super Saiyan", price: 100 },
    { id: 4, name: "Zelda Breath of the Wild", price: 200 },
    { id: 5, name: "Skin Valorant", price: 120 },
    { id: 6, name: "Taza de Star Wars", price: 220 },
  ],
};

// PRODUCTS
app.get("/products", (req, res) => {
  res.status(200).send(products);
});

app.post("/addProduct", (req, res) => {
  const { name, price } = req.body;
  products.items.push({
    id: products.items.at(-1).id + 1,
    name,
    price: +price,
  });

  res.status(201).send(products);
});

app.put("/updateProduct/id/:id", (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  let status = 400;

  if (!name || !price) return res.status(400).send();

  products.items.forEach((item) => {
    if (item.id === +id) {
      item.name = name ? name : item.name;
      item.price = price ? price : item.price;
      status = 200;
    }
  });

  status === 200 ? res.status(200).send(products) : res.status(400).send();
});

app.delete("/deleteProduct/id/:id", (req, res) => {
  const id = req.params.id;
  const l = products.items.length;

  products.items = products.items.filter((item) => item.id !== +id);
  let status = l === products.items.length ? 400 : 200;

  status === 200 ? res.status(200).send(products) : res.status(400).send();
});

// GETTERS
app.get("/getProductsByPrice/price/:price", (req, res) => {
  const price = +req.params.price;
  let result = products.items.filter((item) => item.price === price);
  res.status(result.length > 0 ? 200 : 400).send(result);
});

app.get("/getProductsByPrice", (req, res) => {
  const minPrice = +req.query.minPrice;
  const maxPrice = +req.query.maxPrice;
  let result = products.items.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  res.status(result.length > 0 ? 200 : 400).send(result);
});

app.get("/getProduct/id/:id", (req, res) => {
  const id = +req.params.id;
  const result = products.items.find((item) => item.id === id);

  res.status(result ? 200 : 400).send(result);
});

app.get("/getProduct/name/:name", (req, res) => {
  const name = req.params.name;
  const result = products.items.find((item) => item.name === name);

  res.status(result ? 200 : 400).send(result);
});

// PORT
app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
