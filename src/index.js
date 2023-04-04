const express = require('express');
const { PORT }=require("./config/serverConfig.js");
const app=express();

const prepareAndStartServer=()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    });
}

prepareAndStartServer();
