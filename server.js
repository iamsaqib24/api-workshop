require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const productRouter = require("./routes/product");

app.use(express.json());
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome Saqib from express");
});
