const express = require("express");
const mwLogger = require("./middleware/logger");
const mwErrorhandler = require("./middleware/errorHandler");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(mwLogger);
app.use(mwErrorhandler);

app.get("/api", (req, res) => {
    res.json({message: "api index"});
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});