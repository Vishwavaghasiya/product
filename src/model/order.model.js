const mongoose = require("mongoose");

/**Order schema */
const orderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        items: {
            type: String,
            trim: true,
            required: true
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user",
            required: true
        },
        price: {
            type: Number,
            trim: true,
            required: true
        },
        status: {
            type: String,
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

const Order = mongoose.model("order", orderSchema);
module.exports = Order;