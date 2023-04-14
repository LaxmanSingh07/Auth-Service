const express = require('express');
const { PORT } = require("./config/serverConfig");
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const { User } = require('./models/index');
const bcrypt = require('bcrypt');
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
    });
}

prepareAndStartServer();
