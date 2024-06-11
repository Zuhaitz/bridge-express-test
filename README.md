# Express Test

A practice with express and API building.

## API Reference

#### Get all items

```http
  GET /products
```

#### Add item

```http
  POST /addProduct
```

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `name`    | `string` | **Required**. Name of item  |
| `price`   | `int`    | **Required**. Price of item |

#### Update item

```http
  PUT /updateProduct/id/:id
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `int`    | **Required**. Id of the item to update |
| `name`    | `string` | Name of item                           |
| `price`   | `int`    | Price of item                          |

#### Delete item

```http
  DELETE /deleteProduct/id/:id
```

| Parameter | Type  | Description                        |
| :-------- | :---- | :--------------------------------- |
| `id`      | `int` | **Required**. Id of item to delete |

#### Get items by price

```http
  GET /getProductsByPrice/price/:price
```

| Parameter | Type  | Description                           |
| :-------- | :---- | :------------------------------------ |
| `price`   | `int` | **Required**. Price of items to fetch |

#### Get items price range

```http
  GET /getProductsByPrice?minPrice=${price}&maxPrice=${price}
```

| Parameter  | Type  | Description                                   |
| :--------- | :---- | :-------------------------------------------- |
| `minPrice` | `int` | **Required**. Minimun price for item to fetch |
| `maxPrice` | `int` | **Required**. Maximum price for item to fetch |

#### Get item by id

```http
  GET /getProduct/id/:id
```

| Parameter | Type  | Description                       |
| :-------- | :---- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of item to fetch |

#### Get item by name

```http
  GET /getProduct/name/:name
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `name`    | `string` | **Required**. Name of item to fetch |
