//any bussiness logic goes here

const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig')
const bcrypt=require('bcrypt');
const UserRepository = require('../repository/user-repository');
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        console.log(data);
        try {
            const user = await this.userRepository.create(data);
            return user;
        }
        catch (error) {
            console.log("Something went wrong in service layer", error);
            throw error;
        }
    }
    createToken(user) {
        try {
            const result = jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
            return result;
        }
        catch (error) {
            console.log("Something went worin in token creation");
            throw (error);
        }
    }
    verfiyToken(token)
    {
        try {
           const response =jwt.verify(token,JWT_KEY);
           return response;
        }
        catch (error) {
            console.log("Something went worin in token validation");
            throw (error);
        }
    }
    checkPassword(userInputPlainPassword,encryptedPassword)
    {
        try{
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        }catch(error)
        {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }
}

module.exports = UserService;