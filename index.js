const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

const connectdb = require('./mongoosedb/connectDB');

const app = express();

require('./config/passport')(passport);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));


connectdb.connectToDB();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

// async function createUser() {
//     const result=await database.createUser(us, pass, email);
//     console.log(result);
// }   
// createUser()

app.use('/', require('./app/routes/index'));
app.use('/users', require('./app/routes/users'));



const port = process.env.PORT || 3000;
app.listen(port);
