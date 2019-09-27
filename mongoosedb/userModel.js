const mongoose = require( 'mongoose' );
const userSchema = new mongoose.Schema({
    login: {
        type:String,
        index: { unique: true },
        unique: true, 
        required:true,
        minlength:4
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select: false
    },
    date_created:{ type: Date, default: Date.now},
});
const User=mongoose.model('User', userSchema );
const createUser=(login,password)=>{
    if(login && password){
        user = new User({
            login: login,
            password: password,
        });
    }else if(!password){
        user = new User({
            login: login,
        });
    }else if(!login){
        user = new User({
            password: password,
        });
    }
    module.exports.user = user
}
module.exports.createUser = createUser





