const getUsers = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: "placeholder data"
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {getUsers};