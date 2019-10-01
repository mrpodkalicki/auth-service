const model = require('../mongoosedb/userModel');
const User = model.User;

const registerUser = async (req, res) => {
    let user = new User({
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        admin: req.body.admin
    });
    try {
        await user.hashPassword();
        await user.save();
        return 'User saved.'
    } catch (error) {
        let result = model.handleError(error);
        return result;
    }
};

module.exports.registerUser = registerUser;