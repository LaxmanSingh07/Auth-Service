const validateUserAuth=(req,res,nest)=>{
    if(!req.body.email||!req.body.password)
    {
        return res.status(400).json(
            {
                success:false,
                data:{},
                message:"Something went wrong",
                err:"Email or password missing in the request"
            }
        )
    }
}

module.exports={
    validateUserAuth
}


