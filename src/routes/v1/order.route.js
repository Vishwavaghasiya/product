const express = require("express");
const { orderController } = require("../../controller");

const routes = express.Router();

/**Create order */
routes.post(
    "/createOrder",
    orderController.createOrder
);

/**Get order */
routes.get(
    "/getList",
    orderController.getOrderList
);

/**Get details */
routes.get(
    "/getDetails/:orderId",
    orderController.getOrderDetails
);

/**update order */
routes.put(
    "/updateRecord/:orderId",
    orderController.updateOrder
);

/**delete record */
routes.delete(
    "/deleteRecord/:orderId",
    orderController.deleteOrder
);

/**send mail */
routes.post(
    "/sendMail",
    orderController.sendMail
);

module.exports = routes;