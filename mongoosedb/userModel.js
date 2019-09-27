const mongoose = require( 'mongoose' );


async function handleError(err){
    if (err.code) {
        if (err.code==11000) { 
            return "duplicate login";    
        };              
    } else if ( err.errors ){
        if (err.errors.login) {                       //LOGIN ERROR
            if (err.errors.login['kind'] == 'minlength'){  //MIN LENGTH LOGIN ERROR/ MIN:4
                return "username is to short"; 
            } else if (err.errors.login['kind'] = 'required'){  //EMPTY LOGIN ERROR
                return "lack of username";  
            }
        } else if ( err.errors.password ) { //PASSWORD ERROR
            if (err.errors.password['kind'] == 'minlength') { //MIN LENGTH PASSWORD/ ERROR MIN:6
                return "password is to short";  
            } else if (err.errors.password['kind'] = 'required') { //EMPTY PASSWORD ERROR
                return "lack of password"; 
            }                
        }
    }
}

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
async function createUser(login,password){
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
    try {
        await user.save()
        return 'user Saved to DB'
    } catch (error) {
        let result = handleError(error)
        return result
    }
}
module.exports.createUser = createUser





