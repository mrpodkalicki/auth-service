const express = require('express');
const bodyParser = require('body-parser');
const connectdb = require('./mongoosedb/connectDB');
const database = require('./mongoosedb/userModel');
const handlers = require('./mongoosedb/user');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

connectdb.connectToDB();

async function creatUser() {
    const result=await database.createUser(us, pass, email);
    console.log(result);
}   
creatUser()

app.get('/', (req, res) => {
    console.log('Hello from GET!');
    res.render('register');
    //res.send('Hello World');
});

app.put('/api/users/:id', handlers.updateUser);
app.post('/api/users/', handlers.registerUser);

const port = process.env.PORT || 3000;
app.listen(port);
