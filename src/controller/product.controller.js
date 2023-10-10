const { productService } = require("../services");

/**create product */
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;
        const product = await productService.createProduct(reqBody);

        if (!product) {
            throw new Error("opss...! , something wents wrong !");
        }

        res.status(200).json({
            success: true,
            message: product
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get product list */
const getProductList = async (req, res) => {
    try {
        const getList = await productService.getProductList();
        if (!getList) { throw new Error("Oppss... !, Something wents wrong !!") }

        res.status(200).json({ getList });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

/**get details */
const getProductDetails = async (req, res) => {
    try {
        const productId = req.params.productId;
        const getDetails = await productService.getProductById(productId);
        if (!getDetails) {
            throw new Error("Oppss...! , Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "Product get successsfully !",
            data: getDetails
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**update product details */
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.productId
        const productExist = await productService.getProductById(productId);
        if (!productExist) {
            throw new Error("Product not found !");
        }

        await productService.updateProduct(productId, req.body);

        res.status(200).json({
            success: true,
            message: "Product is updated successfully !",
            data: productExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Oppss... ! , Something wents wrong , please try again or later !"
        });
    }
}

/**delete Product */
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const productExists = await productService.getProductById(productId);
        if (!productExists) {
            throw new Error("Product not found !");
        }

        await productService.deleteProduct(productId);

        res.status(200).json({
            success: true,
            message: "Product record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Oppss...! , Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createProduct,
    getProductList,
    getProductDetails,
    updateProduct,
    deleteProduct
}