const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    login: {
        type:String,
        index: true,
        unique: true,
        required:true,
    },
    password:{
        type:String,
        require:true,
    },
    date_created:{ type: Date, default: Date.now}

});

const User=mongoose.model('User', userSchema );

async function addUser (login,password){

    const user = new User({
        login: login,
        password:password

    });
    let e=0;
    const ifAdd=await user.save(function (err) 
    {
        if (err) return handleError (err);
        // saved!
    });
    console.log(err,'ifadd')
    return 1
};



module.exports.addUser = addUser;