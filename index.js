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
    // console.log(User)
    // we're connected!
});
// console.log(err,"err")
// console.log(database.addUser('siema', '3rfe'));
// database.addUser('adi', '5876');
// if (err)
database.addUser('abbb');
