const database = require( '../mongoosedb/userModel');

const updateUser = async (req, res) => {
    console.log('Hello from PUT!');
    const user = await database.User.findById(req.params.id);
    if(!user) return res.status(404).send('The user with the given ID does not exist');

    console.log(user.password);

    user.login = req.body.login ? req.body.login : user.login;
    user.email = req.body.email ? req.body.email : user.email;
    user.admin = req.body.admin ? req.body.admin : user.admin;
    
    const result = await user.save();

    res.send(result);
}

module.exports.updateUser = updateUser;
