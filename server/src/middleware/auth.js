const User = require("../models/user");

module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                success: false,
                error: "Authorization token cannot be found"
            });
        } 

        const token = (req.headers.authorization).split(" ")[1];
        const user = User.findone({token: token});

        if (!user) {
            return res.status(401).json({
                success: false,
                error: "User with current authorization token does not exist"
            });
        }

        req.user = user;
        next();
    } catch(error) {
        next(error);
    }
}
































