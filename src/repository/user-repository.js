const {User}=require('../models/index');

class UserRepository{
    async create(data){
        try{
            const user=await User.create(data);
            return user;
        }
        catch(error){
            console.log("Something went wrong in repo layer",error);
            throw error;
        }
    }
    async destroy(Userid){
        try{
            const user=await User.destroy({where:{id:Userid}});
            return user;
        }
        catch(error){
            console.log("Something went wrong in repo layer",error);
            throw error;
        }
    }
   
}


module.exports=UserRepository;