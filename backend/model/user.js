const { User } = require("../schema/user-schema");
const helper = require('../app/helper')

const ObjectId = require("mongodb").ObjectID;

function createUserInfo(req,res) {
  let { firstname,
  lastname,
  email,
  phone,
  about,
  role,
  organization,
  start_date,
  end_date,
  status} = req.body;
  console.log(req.body)
  let apiPromise = new Promise((resolve,reject)=>{
    User.insertMany(
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        about: about,
        role: role,
        organization: organization,
        start_date: start_date,
        end_date: end_date,
        status: status,
        created_date: Date.now(),
      },
      (error, inserResult) => {
        if (error) {
          reject(error);
        } else {
          resolve(inserResult);
        }
      }
    );
  })
  apiPromise.then((result)=>{
      if(result !== undefined){
        helper.apiResponse(res, 1, "User Info created", result);
      }else{
          helper.apiResponse(res, -1, "Something wrong");
      }
  }).catch((error)=>{
      console.log(error)
      helper.apiResponse(res, 2, error);
  })
}

exports.createUserInfo = createUserInfo;

function getUserInfo(req,res){
    let apiPromise = new Promise((resolve,reject)=>{
        User.find({},(err,userInfo)=>{
            if(err){
                reject(err);
            }else{
                resolve(userInfo)
            }
        })
    })
    apiPromise.then((result)=>{
        if(result !==undefined){
            helper.apiResponse(res,1,"UserInfo",result)
        }else{
            helper.apiResponse(res,-1,"User Not found")
        }
    }).catch((error)=>{
        console.log(error)
        helper.apiResponse(res,2,error)
    })


}
exports.getUserInfo = getUserInfo;

function getSingleUserInfo(req,res){
  let  id  = req.params.id;
  console.log("id",id)
  let apiPromise = new Promise((resolve,reject)=>{
    User.findById({_id:id},(error,result)=>{
      if(error){
        reject(error)
      }else{
        console.log(result)
        resolve(result)
      }
    })
  })
  apiPromise.then(result=>{
    if(result !==undefined){
      helper.apiResponse(res,1,"User info",result)
    }else{
      helper.apiResponse(res,-1,"User not found")
    }
  }).catch(error=>{
    helper.apiResponse(res,2,error)
  })
}
exports.getSingleUserInfo = getSingleUserInfo;

function editUserInfo(req,res){
    let {
      id,
      firstname,
      lastname,
      email,
      phone,
      about,
      role,
      organization,
      start_date,
      end_date,
      status,
    } = req.body;
    console.log(req.body)
    let apiPromise = new Promise((resolve,reject)=>{
        User.updateOne(
          { _id: id },
          {
            $set: {
              firstname: firstname,
              lastname: lastname,
              email: email,
              phone: phone,
              about: about,
              role: role,
              organization: organization,
              start_date: start_date,
              end_date: end_date,
              status: status,
              updated_date: Date.now(),
            },
          },
          (error, updateResult) => {
            if (error) {
              reject(error);
            } else {
              resolve(updateResult);
            }
          }
        );
    })
    apiPromise.then((result)=>{
        if(result !==undefined){
            helper.apiResponse(res, 1, "Update successfully ", result);
        }else{
            helper.apiResponse(res, -1, "User Not found ");
        }
    }).catch((error)=>{
        helper.apiResponse(res, 2, error);
    })


}

exports.editUserInfo = editUserInfo;

function deleteUser(req,res){
    let id = req.params.id;
    let apiPromise = new Promise((resolve,reject)=>{
        User.findByIdAndDelete({ _id: ObjectId(id) }, (error, deletedResult) => {
          if (error) {
            reject(error);
          } else {
            resolve(deletedResult);
          }
        });
    })
    apiPromise.then((result)=>{
        if(result !==undefined){
             helper.apiResponse(res, 1, "User Deleted",result);
        }else{
             helper.apiResponse(res, -1, "User Not found ");
        }
    }).catch((error)=>{
        console.log(error);
        helper.apiResponse(res,2,error)
    })

}

exports.deleteUser=deleteUser;