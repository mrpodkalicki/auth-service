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
async function show() {
    const us = 'aaaaa';
    const pass = null;

    
    const result=await database.createUser(us, pass);
    console.log(result)
}

show()





