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

const registerUser = async (req, res, next) => {
    try {
        const user = new User(req.body);
        user.save();
        res.status(201).json({
            success: true,
            message: `User: ${req.body.username} registered successfully`,
            data: user
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {getUsers, registerUser};