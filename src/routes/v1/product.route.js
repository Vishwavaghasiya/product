const express = require("express");
const { productController } = require("../../controller");

const routes = express.Router();

/**Create product */
routes.post(
    "/createProduct",
    productController.createProduct
);

/**Get product */
routes.get(
    "/getList",
    productController.getProductList
);

/**Get details */
routes.get(
    "/getDetails/:productId",
    productController.getProductDetails
);

/**update product */
routes.put(
    "/updateRecord/:productId",
    productController.updateProduct
);

/**delete record */
routes.delete(
    "/deleteRecord/:productId",
    productController.deleteProduct
);

module.exports = routes;