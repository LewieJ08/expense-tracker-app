const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const mwLogger = require("./middleware/logger");
const mwErrorhandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: "http://localhost:5173/",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(mwLogger);
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);

app.use(mwErrorhandler);

connectDB().then(
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    })
);