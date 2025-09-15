const User = require("../models/user");

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {getUsers};