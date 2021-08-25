const header = require("../app/header");
const user = require('../model/user');
const helper = require('../app/helper')


header.app.post('/create-info',helper.authenticate,(req,res)=>{
    user.createUserInfo(req,res);
})

header.app.get('/user-info',helper.authenticate,(req,res)=>{
    user.getUserInfo(req,res);
})

header.app.get('/user-info/:id',  (req, res) => {
  user.getSingleUserInfo(req, res);
});
header.app.put('/edit-user',helper.authenticate,(req,res)=>{
    user.editUserInfo(req,res)
})

header.app.delete('/delete-user/:id',helper.authenticate,(req,res)=>{
    user.deleteUser(req,res)
})