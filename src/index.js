const express = require('express');
const { PORT } = require("./config/serverConfig");
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const { User } = require('./models/index');
const bcrypt = require('bcrypt');

const UserService=require('./services/user-service');
const app = express();
const userRepository = require('./repository/user-repository');

const prepareAndStartServer = () => {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);
    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);
        // const repo=new userRepository();
        // const response=await repo.getById(3);
        // console.log(response);
        // const incomingPassword="123456";
        // const user=await User.findByPk(3);
        // const response=bcrypt.compareSync(incomingPassword,user.password);
        // console.log(response);

        const service=new UserService();
        // const newToken=service.createToken({email:"lucky@admin.com",id:1});
        // console.log(newToken);

        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2t5QGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE2ODE0MzkyNzYsImV4cCI6MTY4MTQ0Mjg3Nn0.Bf9yxVqXik1qWlZIHIw0oohovktUGgIgykP-phjWfnI';
        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2t5QGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE2ODE0Mzk1NDgsImV4cCI6MTY4MTQzOTU2OH0.w_iilJGpalcEQQnQavQiDMZ6vvEgFS05M7gIFW_nEAU'
        // const response=service.verfiyToken(token);
        // console.log(response)
    });
}

prepareAndStartServer();
