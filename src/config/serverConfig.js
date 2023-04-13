const dotenv=require("dotenv")
const bcrypt=require("bcrypt")
dotenv.config(); //THIS IS WILL .DOTENV FILE

// console.log(process.env.PORT);
module.exports = {
    PORT: process.env.PORT,
    SALT:bcrypt.genSaltSync(10)
}