const express = require("express");
const expenseController = require("../controllers/expenseController");
const mwAuth = require("../middleware/auth");

const router = express.Router();
router.use(mwAuth);

router.route("/")
    .get(expenseController.getExpenses)
    .post(expenseController.createExpense)

module.exports = router;