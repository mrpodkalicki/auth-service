const mongoose = require('mongoose');

async function connectToDB() {
    try {
        mongoose.connect('mongodb://localhost/userData', {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useCreateIndex: true
     });
     var db = mongoose.connection;
        // await mongoose.connect('mongodb+srv://RW-user:RW-user@cc-team-delta-whvgm.mongodb.net/test?retryWrites=true&w=majority')
        console.log('Connected to MongoDB...')
    } catch (err) {
        console.error('Connection failed...', err);
    }
}

module.exports.connectToDB = connectToDB;
