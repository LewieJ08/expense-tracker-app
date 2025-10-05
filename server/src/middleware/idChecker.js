const mongoose = require("mongoose");
const Expense = require("../models/Expense");

module.exports = async (req, res, next) => {
    const expenseId = req.params.id;

    if (!mongoose.isValidObjectId(expenseId)) {
        return res.status(400).json({
            success: false,
            error: "Invalid expense ID"
        });
    }

    try {
        const expense = await Expense.FindById(expenseId);

        if (!expense) {
            return res.status(404).json({
                success: false,
                error: "Expense does not exist"
            });
        }

        next();
    } catch(error) {
        next(error);
    }
}