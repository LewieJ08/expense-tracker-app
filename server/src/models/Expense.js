const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    _userId: {
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
    category: {
        type: String,
        required: true
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

expenseSchema.index({_userId: 1, title: 1}, {unique: true});

module.exports = new mongoose.model("Expense", expenseSchema);