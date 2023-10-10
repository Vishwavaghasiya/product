const mongoose = require("mongoose");

/**user schema */
const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true
        },
        firstName: {
            type: String,
            trim: true,
            required: true
        },
        lastName: {
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

const User = mongoose.model("user", userSchema);
module.exports = User;