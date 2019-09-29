const connectdb = require('./mongoosedb/connectDB');

connectdb.connectToDB();


const port = process.env.PORT || 3000;
app.listen(port);
