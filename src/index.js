const express = require('express');
const bodyParser = require('body-parser');
const connectdb = require('./mongoosedb/connectDB');
const database = require( './mongoosedb/userModel');
const handler = require( './handlers/updateUser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

connectdb.connectToDB();

async function creatUser() {
    const result=await database.createUser(us, pass,email);
    console.log(result)
}   
creatUser()

app.get('/', (req, res) => {
    console.log('Hello from GET!');
    res.render('register');
    //res.send('Hello World');
});

app.put('/api/users/:id', handler.updateUser);

// For testing registration page. Can be deleted if registration rout will be ready.
app.post('/users', (req, res) => {
    console.log('Hello from POST!');
    console.log(req.body);
    res.render('registered', { login: req.body.login });  
});
////////////////////////////////////////////////////////

const port = process.env.PORT || 3000;
app.listen(port);
