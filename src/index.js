const express = require('express');
const connectdb = require('./mongoosedb/connectDB');
const database = require( './mongoosedb/userModel');
const handler = require( './handlers/updateUser');

const app = express();
app.use(express.json());

connectdb.connectToDB();

async function creatUser() {
    // const result=await database.createUser(us, pass,email);
    // console.log(result)
}   
creatUser()

app.get('/', (req, res) => {
    console.log('Hello from GET!');
    res.send('Hello World');
});

app.put('/api/users/:id', handler.updateUser);

const port = process.env.PORT || 3000;
app.listen(port);
