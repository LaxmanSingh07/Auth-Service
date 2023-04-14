const UserService = require("../services/user-service");
const userService=new UserService();
const create = async (req, res) => {
  try {

    const response=await userService.create({
        email: req.body.email,
        password: req.body.password,
       
    });
    // console.log(req.body.email,req.body.password);
    return res.status(201).json({
        success:true,
        message:"User created successfully",
        data:response,
        err:{}
    })
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Something went wrong in controller layer",
        data:{},
        success: false,
        err: error,
      });
  }
};

const signIn=async(req,res)=>{
  try{
    const response=await userService.singIn(req.body.email,req.body.password);
    return res.status(200).json({
      success:true,
      data:response,
      err:{},
      message:"successfully signed in"
    });
  }
  catch(error)
  {
    console.log(error);
      return res
        .status(500)
        .json({
          message: "Something went Wrong",
          data:{},
          success: false,
          err: error,
        });
    
  }
}

module.exports = {
    create,
    signIn

}
