const express = require("express");
const expenseController = require("../controllers/expenseController");

const router = express.Router();

router.route("/")
    .get(expenseController.getExpenses);
