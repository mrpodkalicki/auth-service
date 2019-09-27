const mongoose = require( 'mongoose' );
const bcrypt = require ( 'bcrypt' );

async function handleError(err){
    if (err.code) {
        if (err.code==11000) {                                 //DUPLICATE KEY
            const nameObj = Object.getOwnPropertyNames(err.keyPattern)[0]
            switch (nameObj) {
                case 'login':                                 //DUPLICATE LOGIN
                    return " this login exist ";
                case 'email':                                 //DUPLICATE EMAIL
                    return "this email exist";
            }
        };              
    } else if ( err.errors ){
        if (err.errors.login) {  
            switch ( err.errors.login['kind'] ) {
                case 'required':                           //EMPTY LOGIN ERROR
                    return "lack of username";             
                case 'minlength':                           //MIN LENGTH LOGIN ERROR/ MIN:4
                    return "username is to short";
               case 'maxlength':                            //MAX LENGTH LOGIN ERROR/ MAX:64
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
        } else if (err.errors.email) {
            switch (err.errors.email['kind']) {
                case 'required':                         //EMPTY EMAIL ERROR
                    return "lack of email";
                case 'minlength':                       //MIN LENGTH EMAIL ERROR/ MIN:5
                    return "email is to short";
                case 'maxlength':                       //MAX LENGTH EMAIL ERROR/ MAX:256
                    return "email is to long";
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
        maxlength: 64,
    },
    password: {
        type:String,
        required:true,
        minlength:6,
        maxlength:512,
        select: false
    },
    email: {
        type:String,
        unique: true, 
        required:true,
        minlength:5,
        maxlength: 256,
    },
    admin:{
        type:Boolean,
        default:false
    },
    date_created:{ 
        type: Date, 
        default: Date.now},
});

userSchema.method('hashPassword', async function (){
    const salt = await bcrypt.genSalt( 5 );
    this.password = await bcrypt.hash( this.password, salt )
})

const User=mongoose.model('User', userSchema );
async function createUser( login, password, email, admin ){
    if ( login && password && email ){
        user = new User ({
            login: login,
            password: password,
            email: email,
            admin:admin
        });
    } else if ( !password ){
        user = new User ({
            login: login,
            email: email
        });
     }else if( !login ){
        user = new User ({
            password: password,
            email: email
        });
        } else if ( !email ) {
            user = new User({
                login: login,
                password: password,
            });
    }
    try {
        await user.hashPassword();
        await user.save()
        return 'user Saved to DB'
    } catch (error) {
        let result = handleError(error)
        return result
    }
}
module.exports.createUser = createUser;


