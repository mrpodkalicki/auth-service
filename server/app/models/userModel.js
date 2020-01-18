const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

async function handleError(err) {
    if (err.errors) {
        if (err.errors.login) {
            switch (err.errors.login['kind']) {
                case 'required':                           //EMPTY LOGIN ERROR
                    return "Lack of username";
                case 'minlength':                           //MIN LENGTH LOGIN ERROR/ MIN:4
                    return "Username is to short";
                case 'maxlength':                            //MAX LENGTH LOGIN ERROR/ MAX:64
                    return "Login is to long";
            }
        } else if (err.errors.password) { //PASSWORD ERROR
            switch (err.errors.password['kind']) {
                case 'required':                       //EMPTY PASSWORD ERROR
                    return "Lack of password";
                case 'minlength':                      //MIN LENGTH PASSWORD ERROR/ MIN:6
                    return "Password is to short";
                case 'maxlength':                      //MAX LENGTH PASSWORD ERROR/ MAX:512
                    return "Password is to long";
            }
        } else if (err.errors.email) {
            switch (err.errors.email['kind']) {
                case 'required':                         //EMPTY EMAIL ERROR
                    return "Lack of email";
                case 'minlength':                       //MIN LENGTH EMAIL ERROR/ MIN:5
                    return "Email is to short";
                case 'maxlength':                       //MAX LENGTH EMAIL ERROR/ MAX:256
                    return "Email is to long";
            }
        }
    }
}
const userSchema = new mongoose.Schema({

    login: {
        type: String,
        index: { unique: true },
        unique: true,
        required: true,
        minlength: 4,
        maxlength: 64
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 512,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 256
    },
    admin: {
        type: Boolean,
        default: false
    },
    date_created: {
        type: Date,
        default: Date.now
    },
});

userSchema.method('hashPassword', async function () {
    const salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', userSchema);
async function createUser(login, password, email, admin) {
    if (login && password && email) {
        user = new User({
            login: login,
            password: password,
            email: email,
            admin: admin
        });
    } else if (!password) {
        user = new User({
            login: login,
            email: email
        });
    } else if (!login) {
        user = new User({
            password: password,
            email: email
        });
    } else if (!email) {
        user = new User({
            login: login,
            password: password,
        });
    }
    try {
        if (password) {
            await user.hashPassword();
        }
        await user.save();
        return 'user Saved to DB';
    } catch (error) {
        let result = handleError(error);
        return result;
    }
}

module.exports.createUser = createUser;
module.exports.User = User;
module.exports.handleError = handleError;
