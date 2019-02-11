var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
    
var jwt = require('jsonwebtoken');
var cors = require('cors')

mongoose.Promise = global.Promise;

var instance = express();
var router = express.Router();


// middlewares

instance.use(router);
instance.use(bodyParser.urlencoded({extended:false}));
instance.use(bodyParser.json());
instance.use(cors());

// mongo connection

mongoose.connect("mongodb://localhost/ProductAppDb", {useNewUrlParser:true});

var dbConnect = mongoose.connection;

if (!dbConnect){
    console.log("Connection error");
  
}

var userSchema = mongoose.Schema({
    UserName:String,
    Password:String
});

var userModel = mongoose.model("Users", userSchema, "Users");



instance.post("/api/users/create", function(request, response){
    var user={
        UserName : request.body.UserName,
        Password : request.body.Password
    };

    userModel.create(user, function(err, res){
        if(err){
            response.statusCode = 500;
            response.send({statusCode:res.statusCode, message:err})
        }

        response.send({statusCode:200, message:res});
    });
});


// jwt secret

var jwtSettings = {
    jwtSecret : "sbibombob123"
};

instance.set("jwtSecret", jwtSettings.jwtSecret);
var tokenStore="";

// authenticate user

instance.post("/api/users/auth", function(request, response){
    var user={
        UserName : request.body.UserName,
        Password : request.body.Password
    };

    console.log("In Auth USer" + JSON.stringify(user));

    userModel.findOne({UserName : request.body.UserName}, function(err, usr){
        if(err){
            response.statusCode = 500;
            response.send(statusCode=response.statusCode, message=err);
        }
        //response.send(statusCode = 200, message= res);

        if(!usr){
            console.log("User not found");
            
            response.statusCode = "User not found";
            response.send(statusCode=response.statusCode, message= response.err)
        }

       else if(usr ){
            if(usr.Password != user.Password){
                response.send({
                    statusCode:404,
                    message:"Password does not match"
                });
            }
            else {
                // sign in and generate token

                var token = jwt.sign({usr}, instance.get("jwtSecret"), { expiresIn:3600});
            
                tokenStore = token;

                response.send({
                    authenticated:true,
                    message:"Login Success",
                    token:token
                });
            }
            

       }
    });

});

instance.listen(4040, function(){
    console.log("listening on port 4040");
    
});