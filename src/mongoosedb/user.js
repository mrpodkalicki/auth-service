const model = require('./userModel');
const User = model.User;

const registerUser = async (req, res) => {
    console.log('Hello from POST!');
    console.log(req.body);
    if (req.body.password === req.body.confirm_password) {
        let user = new User({
            login: req.body.login,
            password: req.body.password,
            email: req.body.email,
            admin: req.body.admin
        });
        
        try {
            await user.hashPassword();
            await user.save();
            res.send('User saved.');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    else if (req.body.confirmPassword) {
        res.status(400).send('Passwords are not equal.');
    }
    else res.status(400).send('You have to confirm password.');
};

const updateUser = async (req, res) => {
    console.log('Hello from PUT!');
    console.log(req.body);
    const user = await model.User.findById(req.params.id);
    if(!user) return res.status(404).send('The user with the given ID does not exist');

    console.log(req.body);

    user.login = req.body.login ? req.body.login : user.login;
    user.email = req.body.email ? req.body.email : user.email;
    user.admin = req.body.admin ? req.body.admin : user.admin;
    
    const result = await user.save();
    console.log(result);
    res.send(result);
};

const getUsers = async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.send(users);
}

const deleteUser = async (req, res) => {
    const result = await User.deleteOne( { _id: req.params.id });
    console.log(result);
};

module.exports.registerUser = registerUser;
module.exports.updateUser = updateUser;
module.exports.getUsers = getUsers;
module.exports.deleteUser = deleteUser;