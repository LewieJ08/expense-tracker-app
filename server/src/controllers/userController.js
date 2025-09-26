const User = require("../models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

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
    let username, password;

    try {
        username = req.body.username;
        password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({username: username, password: hashedPassword});
        await user.save();
        res.status(201).json({
            success: true,
            message: `User: ${username} registered successfully`,
            data: user
        });
    } catch(error) {
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                error: `User with username ${username} already already exists`
            });
        } else {
            next(error);
        }
    }
}

const loginUser = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username: username});
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch || !user) {
            return res.status(401).json({
                success: false,
                error: "Password or Username incorrect"
            });
        }

        const token = crypto.randomBytes(32).toString("hex");
        await User.updateOne({username: username}, {token: token});
        user.token = token;

        res.status(200).json({
            success: true,
            message: `User: ${username} successfully logged in`,
            data: user
        });
    } catch(error) {
        next(error);
    }
}

const logoutUser = async (req, res, next) => {
    try {
        const token = (req.headers.authorization).split(" ")[1];
        await User.updateOne({token: token}, {token: null});

        res.status(200).json({
            success: true,
            message: `User: ${req.body.username} logged out successfully`
        });
    } catch(error) {
        next(error);
    }
}


module.exports = {getUsers, registerUser, loginUser, logoutUser};