const database = require( './mongoosedb/userModel');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/userData', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

async function saveUserToDb(){
    const us = 'aaaaa';
    const pass = 'sfdgf';
    database.createUser( us, pass );
    await database.user.save( async function ( err ){
        if (err) { //   ERROR HANDLING
            if( err.code ){
                switch (err.code) {
                    case 11000:
                        console.log( err );  //DUPLICATE_LOGIN
                        break;
                    default:
                        break;
                };              
            } else if ( err.errors ){
                // console.log(err.errors)
                if (err.errors.login) {                       //LOGIN ERROR
                    if (err.errors.login['kind'] == 'minlength'){  //MIN LENGTH LOGIN ERROR/ MIN:4
                        console.log(err.errors.login) 
                    } else if (err.errors.login['kind'] = 'required'){  //EMPTY LOGIN ERROR
                        console.log(err.errors.login); 
                    }
                } else if ( err.errors.password ) { //PASSWORD ERROR
                    console.log(err.errors.password);
                    if (err.errors.password['kind'] == 'minlength') { //MIN LENGTH PASSWORD/ ERROR MIN:6
                        console.log(err.errors.password); 
                    } else if (err.errors.password['kind'] = 'required') { //EMPTY PASSWORD ERROR
                        console.log(err.errors.password); 
                    }                
                }
            }
        };
    });
    
}
saveUserToDb()




