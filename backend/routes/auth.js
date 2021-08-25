const auth = require("../model/auth");
const header = require('../app/header')
const helper = require('../app/helper')

header.app.post('/user-login',(req,res)=>{
    auth.login(req,res);
})

header.app.post("/user-signup", (req, res) => {
  auth.signup(req, res);
});

header.app.get('/user/accessToken',helper.verifySession,(req,res)=>{
  req.userObject.generateAccessToken().then((accessToken)=>{
    res.header('x-access-token',accessToken).send({accessToken})
  }).catch(e=>{
    res.status(400).send(e)
  })
})