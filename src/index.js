const express = require('express');
const  passport = require('passport');
const  cookieParser = require('cookie-parser')
const session = require('express-session');
const flash = require('connect-flash')
const bodyParser = require('body-parser');
const logger = require('morgan');
const connectdb = require('./mongoosedb/connectDB');
const database = require('./mongoosedb/userModel');
const handlers = require('./mongoosedb/user');

const app = express();
require('../src/config/passport')(passport);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static('public'));
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');




connectdb.connectToDB();
app.use(logger('dev'));
app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({
  extended: true
}));
app.use(cookieParser())

app.use(session({
    secret: 'ses',
    resave: false,
    saveUninitialized: true,
  }));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
async function creatUser() {
    // const result=await database.createUser('adi94', 'adi94', 'siema@gm.pl');
    // console.log(result);
}  



creatUser()


app.put('/api/users/:id', handlers.updateUser);
app.post('/api/users/', handlers.registerUser);

app.use('/',require('../routes/login'));

// For testing registration and login page. Can be deleted if registration and login rout will be ready.
// app.post('/login',(req, res) => {
//     console.log('Hello from POST!');
//     console.log(req.body);
//     res.render('loggedIn', { login: req.body.login, admin: true});  
// });

app.use('/login', passport.authenticate('jwt', {
  session: false
}), require('../routes/loginIn'));

app.get('/admin', (req, res) => {
    console.log('Hello from GET!');
    console.log(req.body);
    res.send('Widok admina');  
})

app.get('/loggedout', (req, res) => {
    console.log('Hello from GET!');
    console.log(req.body);
    res.render('index', { loggedout: true, registered: false, login: "",message:req.flash('loginMessage')  });  
})
///////////////////////////////////////////////////////////////

const port = process.env.PORT || 3000;
app.listen(port);
