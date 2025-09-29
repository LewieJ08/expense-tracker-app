const Expense = require("../models/Expense");

const getExpenses = async (req, res, next) => {
    const expenses = await Expense.find({_userId: req.user.user_id})
    try {
        res.status(200).json({
            success: true,
            message: "success placeholder message",
            data: expenses
        })
    } catch(error) {
        next(error);
    }
}

module.exports = {getExpenses, }