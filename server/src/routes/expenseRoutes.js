const express = require("express");
const expenseController = require("../controllers/expenseController");
const mwAuth = require("../middleware/auth");

const router = express.Router();
router.use(mwAuth);

router.route("/")
    .get(expenseController.getExpenses)
    .post(expenseController.createExpense);

router.route("/:id")
    .delete(expenseController.deleteExpense);

module.exports = router;