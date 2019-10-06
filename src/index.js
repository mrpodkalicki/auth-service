const express = require('express');
const bodyParser = require('body-parser');
const connectdb = require('./mongoosedb/connectDB');
const database = require('./mongoosedb/userModel');
const handlers = require('./mongoosedb/user');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static('public'));

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', "PUT");
    res.header('Access-Control-Allow-Methods', "DELETE");
    res.header('Access-Control-Request-Headers', "Content-Type");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    
    next();
  };

app.use(allowCrossDomain);

app.set('view engine', 'ejs');

connectdb.connectToDB();
/*
async function creatUser() {
    const result=await database.createUser(us, pass, email);
    console.log(result);
}   
creatUser()
*/
app.get('/', async (req, res) => {
    console.log('Hello from GET!');
    //const users = await database.User.find();
    //console.log(users);
    res.render('index', { loggedout: false, registered: false , login: "" });
    //res.send(users);
});

app.put('/api/users/:id', handlers.updateUser);
app.post('/api/users/', handlers.registerUser);
app.get('/api/users', handlers.getUsers);

// For testing registration and login page. Can be deleted if registration and login rout will be ready.
app.post('/login',(req, res) => {
    console.log('Hello from POST!');
    console.log(req.body);
    res.render('loggedIn', { login: req.body.login, admin: true});  
});

app.get('/admin', (req, res) => {
    console.log('Hello from GET!');
    console.log(req.body);
    res.send('Widok admina');  
})

app.get('/loggedout', (req, res) => {
    console.log('Hello from GET!');
    console.log(req.body);
    res.render('index', { loggedout: true, registered: false, login: "" });  
})
///////////////////////////////////////////////////////////////

const port = process.env.PORT || 8000;
app.listen(port);
