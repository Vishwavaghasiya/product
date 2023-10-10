const Product = require("../model");

/**create product */
const createProduct = async (reqBody) => {
    return Product.create(reqBody);
}

/**get product list */
const getProductList = async (req, res) => {
    return Product.find()
        .populate({ path: "category_id", select: "name" });
}

/**get Product details by id */
const getProductById = async (productId) => {
    return Product.findById(productId);
}

/**update Product */
const updateProduct = async (productId, updateBody) => {
    return Product.findByIdAndUpdate(productId, { $set: updateBody });
}

/**delete Product */
const deleteProduct = async (productId) => {
    return Product.findByIdAndDelete(productId);
}

module.exports = {
    createProduct,
    getProductList,
    getProductById,
    updateProduct,
    deleteProduct
}