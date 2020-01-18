const mongoose = require('mongoose');

async function connectToDB() {
     try {
         await mongoose.connect('mongodb+srv://RW-user:RW-user@cc-team-delta-whvgm.mongodb.net/test?retryWrites=true&w=majority')
         console.log('Connected to MongoDB...');
     } catch (err) {
         console.error('Connection failed...', err);
     }
}

module.exports.connectToDB = connectToDB;
