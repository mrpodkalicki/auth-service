const express = require('express');
const app = express();
const database = require( './mongoosedb/userModel');


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
