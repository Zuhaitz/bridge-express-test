const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

let products = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};

// PRODUCTS
app.get("/products", (req, res) => {
  res.status(200).send(products);
});

app.post("/addProduct", (req, res) => {
  const { nombre, precio } = req.body;
  products.items.push({
    id: products.items.at(-1).id + 1,
    nombre,
    precio: +precio,
  });

  res.status(201).send(products);
});

app.put("/updateProduct/id/:id", (req, res) => {
  const id = req.params.id;
  const { nombre, precio } = req.body;
  let status = 400;

  if (!nombre || !precio) return res.status(400).send();

  products.items.forEach((item) => {
    if (item.id === +id) {
      item.nombre = nombre ? nombre : item.nombre;
      item.precio = precio ? precio : item.precio;
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

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
