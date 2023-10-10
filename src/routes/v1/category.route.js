const express = require("express");
const { categoryController } = require("../../controller");

const routes = express.Router();

/**Create category */
routes.post(
    "/createCategory",
    categoryController.createCategory
);

/**Get category */
routes.get(
    "/getList",
    categoryController.getCategoryList
);

/**Get details */
routes.get(
    "/getDetails/:categoryId",
    categoryController.getCategoryDetails
);

/**update category */
routes.put(
    "/updateRecord/:categoryId",
    categoryController.updateCategory
);

/**delete record */
routes.delete(
    "/deleteRecord/:categoryId",
    categoryController.deleteCategory
);

module.exports = routes;