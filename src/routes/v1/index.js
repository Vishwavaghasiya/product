const express = require("express");

const productRoute = require("./product.route");
const categoryRoute = require("./category.route");
const orderRoute = require("./order.route");
const userRoute = require("./user.route");

const routes = express.Router();

routes.use("/product", productRoute);
routes.use("/category", categoryRoute);
routes.use("/order", orderRoute);
routes.use("/user", userRoute);

module.exports = routes