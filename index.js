const dotenv = require('dotenv');
const flash = require('connect-flash');
const  cookieParser = require('cookie-parser');
const session = require('express-session');
dotenv.config({path: '.env'});

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const connectdb = require('./mongoosedb/connectDB');

const app = express();

require('./config/passport')(passport);
app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

app.use(cookieParser())
app.use(session({
    secret: 'ses',
    resave: false,
    saveUninitialized: true,
}));

connectdb.connectToDB();

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.use('/', require('./app/routes/index'));
app.use('/users', require('./app/routes/users'));



const port = process.env.PORT || 3000;
app.listen(port);
