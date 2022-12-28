require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hii , I'm live");
});
// middleware
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
