const mongoose = require( 'mongoose' );


async function handleError(err){
    if (err.code) {
        if (err.code==11000) { 
            return "duplicate login";    
        };              
    } else if ( err.errors ){
        if (err.errors.login) {  
            switch ( err.errors.login['kind'] ) {
                case 'required':                           //EMPTY LOGIN ERROR
                    return "lack of username";             
                case 'minlength':                           //MIN LENGTH LOGIN ERROR/ MIN:4
                    return "username is to short";
               case 'maxlength':                            //MAX LENGTH LOGIN ERROR/ MAX:256
                    return "login is to long";
            }
        } else if ( err.errors.password ) { //PASSWORD ERROR
            switch (err.errors.password['kind']) {
                case 'required':                       //EMPTY PASSWORD ERROR
                    return "lack of password";
                case 'minlength':                      //MIN LENGTH PASSWORD ERROR/ MIN:6
                    return "password is to short";
                case 'maxlength':                      //MAX LENGTH PASSWORD ERROR/ MAX:512
                    return "password is to long";
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
        minlength:4,
        maxlength: 256,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:512,
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
module.exports.createUser = createUser;


