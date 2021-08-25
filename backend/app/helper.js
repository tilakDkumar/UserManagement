
const  jwt = require('jsonwebtoken')
const { auth } = require('../schema/auth-schema')

function apiResponse(res, status1, msg1, data1) {
  var response = {
    status: status1,
    message: msg1,
    data: data1,
  };

  res.json(response);
}
exports.apiResponse = apiResponse;


let authenticate = (req,res,next)=>{
  let token = req.header('x-access-token');
  jwt.verify(token, auth.getJWTSecret(), (err, decoded) => {
    if (err) {
      res.status(401).send(err);
    } else {
      req.user_id = decoded._id;
      next();
    }
  });
}

exports.authenticate = authenticate;

let verifySession = (req,res,next)=>{
  let refreshToken = req.header('x-refresh-token');
  let _id = req.header('_id');
  auth.findByIdAndToken(_id,refreshToken).then((user)=>{
    if(!user){
      return Promise.reject({
        'error':'User not found '
      })
    }
    req.user_id = user._id;
    req.userObject = user;
    req.refreshToken = refreshToken;
    let isSessionValid = false;

    user.sessions.forEach((session)=>{
      if(session.token === refreshToken){
        if(auth.hasRefeshTokenExpired(session.expiresAt) === false){
          isSessionValid = true;
        }
      }
    })
    if(isSessionValid){
      next();
    }else{
      return Promise.reject({
        'error':"Refresh Token has Expired or the session is invalid"
      })
    }




  }).catch(e=>{
    res.status(401).send(e)
  })
}

exports.verifySession = verifySession;