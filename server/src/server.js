const express = require("express");
const connectDB = require("./config/db")
const mwLogger = require("./middleware/logger");
const mwErrorhandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(mwLogger);
app.use("/api/users", userRoutes);

app.use(mwErrorhandler);

connectDB().then(
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    })
);