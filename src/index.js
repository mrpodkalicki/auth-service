const express = require('express');
const passport = require('passport');
const connectdb = require('./mongoosedb/connectDB');
const database = require( './mongoosedb/userModel');
const handler = require( './routes/updateUser');
const auth = require('./config/passport');


const flash = require('connect-flash');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require('express-session')


// app.use(express.session({ secret: 'keyboard cat' }));n



auth(passport)
const app = express();

// app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

connectdb.connectToDB();

async function creatUser() {
    // const result=await database.createUser(us, pass,email);
    // console.log(result)
}  

creatUser()


const routes = require('./routes/routes');
app.use('/', routes);
app.get('/', (req, res) => {
    console.log('Hello from GET!');
    res.send('Hello World');
});

app.put('/api/users/:id', handler.updateUser);

const port = process.env.PORT || 3000;
app.listen(port);
