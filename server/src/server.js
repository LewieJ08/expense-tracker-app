const express = require("express");
const mwLogger = require("./middleware/logger");

const app = express();
const port = 3000;

app.use(mwLogger);

app.get("/api", (req, res) => {
    res.json({message: "api index"});
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});