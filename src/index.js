const express = require('express');
const connectdb = require('./mongoosedb/connectDB');
const database = require( './mongoosedb/userModel');

const app = express();

connectdb.connectToDB();

async function creatUser() {
    const result=await database.createUser(us, pass,email);
    console.log(result)
}   
creatUser()
app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 3000;
app.listen(port);
