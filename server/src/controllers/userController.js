const User = require("../models/user");
const bcrypt = require("bcrypt")

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
        const {username, password} = req.body;
        const hashedPassword = bcrypt.hash(password, 10);

        const user = new User({username: username, password: hashedPassword});
        await user.save();
        res.status(201).json({
            success: true,
            message: `User: ${req.body.username} registered successfully`,
            data: user
        });
    } catch(error) {
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                error: `User with username: '${username}' already exists`
            });
        } else {
            next(error);
        }
    }
}

module.exports = {getUsers, registerUser};