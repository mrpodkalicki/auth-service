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

app.set('view engine', 'ejs');

connectdb.connectToDB();

async function creatUser() {
    const result=await database.createUser(us, pass, email);
    console.log(result);
}   
creatUser()

app.get('/', (req, res) => {
    console.log('Hello from GET!');
    res.render('index', { loggedout: false, registered: false , login: "" });
    //res.send('Hello World');
});

app.put('/api/users/:id', handler.updateUser);
app.post('/users/', handlers.registerUser);

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

const port = process.env.PORT || 3000;
app.listen(port);
