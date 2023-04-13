//any bussiness logic goes here

const UserRepository = require('../repository/user-repository');
class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async create(data){
        console.log(data);
        try{
            const user=await this.userRepository.create(data);
            return user;
        }
        catch(error){
            console.log("Something went wrong in service layer",error);
            throw error;
        }
    }
}

module.exports=UserService;