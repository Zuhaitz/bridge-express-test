const prompts = require("prompts");
const axios = require("axios");

const url = "http://localhost:3000";

console.log("What action do you want to make: ");
console.log("   1. List products.");
console.log("   2. Add product.");
console.log("   3. Delete product. ");

(async () => {
  const response = await prompts({
    type: "number",
    name: "value",
    message: "Enter the number of the option to select: ",
  });

  switch (+response.value) {
    case 1:
      await listProducts();
      break;

    case 2:
      await addItem();
      break;

    case 3:
      await deleteItem();
      break;
  }

  console.log("\nExiting process...");
  process.exit();
})();

async function listProducts() {
  const res = await axios({
    method: "get",
    url: url + "/products",
    responseType: "json",
  });

  console.log("\nList of products: ");

  res.data.items.forEach((item, i) => {
    console.log(`   ${i + 1}. ${item.name} at ${item.price}.`);
  });

  return res.data.items;
}

async function addItem() {
  console.log("\nWe need name and price for the item.");

  const name = await prompts({
    type: "text",
    name: "value",
    message: "Enter product name: ",
    validate: (value) => (value.length === "" ? "No empty text" : true),
  });

  const price = await prompts({
    type: "number",
    name: "value",
    message: "Enter product price: ",
    validate: (value) => (value <= 0 ? "" : true),
  });

  if (!name || !price) return;

  const res = await axios({
    method: "POST",
    url: url + "/addProduct",
    data: {
      name: name.value,
      price: price.value,
    },
  });

  console.log(
    res.statusText === "Created"
      ? "\nItem added successfully!"
      : "\nError adding item"
  );
}

async function deleteItem() {
  const products = await listProducts();

  const pos = await prompts({
    type: "number",
    name: "value",
    message: "Select number of item to delete: ",
    validate: (value) =>
      value > products.length ? "That's not an option" : true,
  });

  const itemId = products[pos.value - 1].id;

  const res = await axios({
    method: "DELETE",
    url: url + `/deleteProduct/id/${itemId}`,
  });

  console.log(
    res.statusText === "OK"
      ? "\nItem deleted successfully!"
      : "\nError deleting item"
  );
}
