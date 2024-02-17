const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
module.exports = mongoose.model("user", adminSchema);