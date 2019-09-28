const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://filipzynwala@gmail.com:coderscamp@cc-team-delta-whvgm.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Connection failed...', err));

app.get('/', (req, res) => {
    res.send('Hello World');
});


const port = process.env.PORT || 3000;
app.listen(port);
