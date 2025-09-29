const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    _userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },
    updatedAt: {
        type: Date
    }
});

module.exports = new mongoose.model("Expense", expenseSchema);