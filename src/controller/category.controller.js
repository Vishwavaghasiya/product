const { categoryService } = require("../services");

/**create category */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const category = await categoryService.createCategory(reqBody);

        if (!category) {
            throw new Error("opss...! , something wents wrong !");
        }

        res.status(200).json({
            success: true,
            message: category
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get category list */
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList();
        if (!getList) { throw new Error("Oppss... !, Something wents wrong !!") }

        res.status(200).json({ getList });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

/**get details */
const getCategoryDetails = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const getDetails = await categoryService.getCategoryById(categoryId);
        if (!getDetails) {
            throw new Error("Oppss...! , Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "category get successsfully !",
            data: getDetails
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**update category details */
const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId
        const categoryExist = await categoryService.getCategoryById(categoryId);
        if (!categoryExist) {
            throw new Error("category not found !");
        }

        await categoryService.updateCategory(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "category is updated successfully !",
            data: categoryExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Oppss... ! , Something wents wrong , please try again or later !"
        });
    }
}

/**delete category */
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if (!categoryExists) {
            throw new Error("category not found !");
        }

        await categoryService.deleteCategory(categoryId);

        res.status(200).json({
            success: true,
            message: "category record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Oppss...! , Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryDetails,
    updateCategory,
    deleteCategory
}