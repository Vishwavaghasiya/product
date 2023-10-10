const { Order } = require("../model");

const createOrder = async (reqBody) => {
  return Order.create(reqBody);
}

const getOrderList = async (req, res) => {
  return Order.find().populate("product").populate("user");
}

const deleteRecord = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
}

const orderById = async (orderId) => {
  return Order.findById(orderId);
}

const updateOrder = async (orderId, updateRecord) => {
  return Order.findByIdAndUpdate(orderId, { $set: updateRecord });
}

module.exports = {
  createOrder,
  getOrderList,
  deleteRecord,
  orderById,
  updateOrder
}