const Expense = require("../models/Expense");

const getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.find({_userId: req.user.user_id});
        res.status(200).json({
            success: true,
            message: "success placeholder message",
            data: expenses
        });
    } catch(error) {
        next(error);
    }
}

const createExpense = async (req, res, next) => {
    const {title, cost, category} = req.body;
    try {
        const expense = new Expense({
            _userId: req.user._id,
            title: title,
            cost: cost,
            category: category
        });

        await expense.save();
        res.status(201).json({
            success: true,
            message: `Expense '${title}' created successfully`
        });
    } catch(error) {
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                error: `${title} already exists, please update the title`
            });
        } else {
            next(error);
        }
    }
}

module.exports = {getExpenses, createExpense};