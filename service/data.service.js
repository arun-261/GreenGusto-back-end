const db = require('./db')

// login funcn
const login =(uname,pswd)=>{
    console.log("inside login defenition");
    // check email and pswd is present in MongoDb
    // asyn funcn call - promise
   return db.Data.findOne({
        uname,
        pswd
    }).then((result)=>{
         if(result){
           console.log("login successfull");  
           return{
            status:true,
            message:'login successfull',
            username:result.uname,
            statusCode:200
           }
         }
         else{
            console.log("invalid username/password");
            return{
                status:false,
                message:'invalid username/password',
                statusCode:404
               }
         }
    })
}

// register

const register =(uname,pswd,email,phone)=>{
    console.log("inside register defenition");
    // check email and pswd is present in MongoDb
    // asyn funcn call - promise
   return db.Data.findOne({
        uname
    }).then((result)=>{
         if(result){
           console.log("email already taken, please log in");  
           return{
            status:false,
            message:'email already taken, please log in',
            statusCode:404
           }
         }
         else{
            console.log("register success");
          let newDetail = new db.Data({
            uname,
            pswd,
            email,
            phone
          })
            newDetail.save()

            return{
                status:true,
                message:'register success',
                statusCode:200
               }
         }
    })
}


const getAllPlants=()=>{
    return db.Plant.find()
   .then((data)=>{
    if(data){
        return{
            statusCode:200,
            result:data
        }
    }
    else{
       return{
        statusCode:404,
        message:"failed to fetch the data"
       }
    }
   })
}

module.exports={
    login,
    getAllPlants,
    register
  
}