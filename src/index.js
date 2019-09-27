const database = require( './mongoosedb/userModel');


async function creatUser() {
    const result=await database.createUser(us, pass,email);
    console.log(result)
}   
creatUser()





