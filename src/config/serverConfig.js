const dotenv=require("dotenv")

dotenv.config(); //THIS IS WILL .DOTENV FILE

console.log(process.env.PORT);
module.exports = {
    PORT: process.env.PORT
}