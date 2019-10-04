const model = require('./models/userModel');
const User = model.User;

const registerUser = async (req, res) => {
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
            res.render('index', { loggedout: false, registered: true, login: req.body.login });  
        } catch (error) {
            let result = model.handleError(error);
            return result;
        }
    }
    else return 'Passwords are not equal.';
};

const updateUser = async (req, res) => {
    console.log('Hello from PUT!');
    const user = await model.User.findById(req.params.id);
    if(!user) return res.status(404).send('The user with the given ID does not exist');

    console.log(user.password);

    user.login = req.body.login ? req.body.login : user.login;
    user.email = req.body.email ? req.body.email : user.email;
    user.admin = req.body.admin ? req.body.admin : user.admin;
    
    const result = await user.save();

    res.send(result);
}

module.exports.registerUser = registerUser;
module.exports.updateUser = updateUser;
