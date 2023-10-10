const mongoose = require("mongoose");

/**product schema */
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: "category",
            required: true
        },
        quantity: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        price: {
            type: Number,
            trim: true,
            required: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;