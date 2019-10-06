const dotenv = require('dotenv');
dotenv.config({path: '.env'});

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const connectdb = require('./mongoosedb/connectDB');

const app = express();

require('./config/passport')(passport);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));


connectdb.connectToDB();

app.use(passport.initialize());

app.set('view engine', 'ejs');

app.use('/', require('./app/routes/index'));
app.use('/users', require('./app/routes/users'));

const port = process.env.PORT || 3000;
app.listen(port);
