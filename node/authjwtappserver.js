// load the required packages
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
mongoose.Promise = global.Promise;
var cors = require("cors");
var instance = express();
var router = express.Router();
instance.use(router);
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(bodyParser.json());
instance.use(cors());  // to manage the different server origins

//Configure to connect to mongodb using mongoose
mongoose.connect(
  "mongodb://localhost/ProductsAppDb",
  { useNewUrlParser: true }
);

var dbConnect = mongoose.connection;
if (!dbConnect) {
  console.log("Sorry Connection is not established");
  return;
}

//Creating userSchema and mapping to userModel
var userSchema = mongoose.Schema({
  UserName: String,
  Password: String
});

var userModel = mongoose.model("User", userSchema, "User");

//Creating productSchema and mapping to productModel
var productsSchema = mongoose.Schema({
  ProductId: Number,
  ProductName: String,
  CategoryName: String,
  Manufacturer: String,
  Price: Number
});

var productModel = mongoose.model("Products", productsSchema, "Products");

//To create new user using post method
instance.post("/api/users/create", function(request, response) {
  var user = {
    UserName: request.body.UserName,
    Password: request.body.Password
  };

  userModel.create(user, function(err, res) {
    if (err) {
      response.statusCode = 500;
      response.send(err);
    }
    response.send({ status: 200, data: res });
  });
});



//Generate the secrete key for jwtSecret
var jwtSettings = {
    jwtSecret: "qwertyasdfqwertyasdf"
};

//Set the secrete key with express
instance.set("jwtSecret", jwtSettings.jwtSecret); // jwtSetting - object & jwtSecret - key
var tokenStore;

// Authenticate user for post operation
instance.post("/api/users/auth", function(request, response) {

  console.log("auth......");
  
  var user = {
    UserName: request.body.UserName,
    Password: request.body.Password
  };

  //console.log("In Auth User " + JSON.stringify(user));

  userModel.findOne({ UserName: request.body.UserName }, function(err, usr) {
    if (err) {
      console.log("Authentication Error...!");
    }
    if (!usr) {
      response.send({
        statusCode: 404,
        message: "User not found...!"
      });
    } else if (usr) {
      console.log("In else if" + JSON.stringify(usr));
      console.log("usr Password : " + usr.Password);
      console.log("User Password : " +user.Password);
      
      if (usr.Password != user.Password) {
        response.send({
          statusCode: 404,
          message: "Sorry, UserName and Password doesn't match"
        });
      } else {
         console.log("In success ...............");
         
        var token = jwt.sign({ usr }, instance.get("jwtSecret"), { 
          expiresIn: 3600 // sing() will generate encrypted token of jwtSecret for usr (json object)
        });
        //save token globally
          tokenStore = token;
          response.send({
          authenticated: true,
          message: "Login Success",
          token: token // token has been sent for further use
        });
        //console.log(token);
      }
    }
  });
});

instance.get("/api/products", function(request, response) {
  var tokenReceived = request.headers.authorization.split(" ")[1];// sending token from here ... postman
  
  
  // verify() will verify token from header with jwtSecret 
  jwt.verify(tokenReceived, instance.get("jwtSecret"), function(err, decoded) {
    console.log("In verify");
    if (err) {
      console.log("In auth error");
      response.send({ success: false, message: "Token verification failed" });
    } else {
      console.log("In auth success");
      request.decoded = decoded;
      productModel.find().exec(function(err, res) {
        if (err) {
          response.statusCode = 500;
          response.send({ status: response.statusCode, error: err });
        }
        response.send({ status: 200, data: res });
      });
    }
  });
});

instance.post("/api/products", function(request, response) {
  var tokenReceived = request.headers.authorization.split(" ")[1];
  jwt.verify(tokenReceived, instance.get("jwtSecret"), function(err,decoded){

    if(err){
      console.log("token error");
      
      response.send({success : false, message:"Token verification failed"})
    }
    else{
      var prd = {
        ProductId: request.body.ProductId,
        ProductName: request.body.ProductName,
        CategoryName: request.body.CategoryName,
        Manufacturer: request.body.Manufacturer,
        Price: request.body.Price
      };

      console.log("In auth success");
      request.decoded = decoded;
      productModel.create(prd, function(err, res) {
        if (err) {
          response.statusCode = 500;
          response.send(err);
        }
        response.send({ status: 200, data: res });
      });

    }
  })
  console.log("In Post....");
  });

instance.get("/api/products/:id", function(request, response) {
  var tokenReceived = request.headers.authorization.split(" ")[1];
  jwt.verify(tokenReceived, instance.get("jwtSecret"), function(err, decoded) {
    console.log("In verify");
    if (err) {
      console.log("In auth error");
      response.send({ success: false, message: "Token verification failed" });
    } else {
      console.log("In auth success");
      request.decoded = decoded;

      var id = request.params.id;
      console.log("Received id =" + id);

      productModel.findById({ ProductId: id }, function(err, res) {
        if (err) {
          response.statusCode = 500;
          response.send(err);
        }
        response.send({ status: 200, data: res });
      });
    }
  });
});

instance.put("/api/products/:id", function(request, response) {
  var prod = {
    ProductId: request.body.ProductId,
    ProductName: request.body.ProductName,
    CategoryName: request.body.CategoryName,
    Manufacturer: request.body.Manufacturer,
    Price: request.body.Price
  };
  var cond = {
    ProductId: request.params.id
  };
  var tokenReceived = request.headers.authorization.split(" ")[1];
  jwt.verify(tokenReceived, instance.get("jwtSecret"), function(err, decoded) {
    console.log("In verify");
    if (err) {
      console.log("In auth error");
      response.send({ success: false, message: "Token verification failed" });
    } else {
      console.log("In auth success");
      request.decoded = decoded;

      var id = request.params.id;
      console.log("Received id =" + id);
      productModel.updateOne(cond, prod, function(err, res) {
        if (err) {
          respose.status = 500;
          response.send({ status: respose.status, error: err });
        }
        response.send({ status: 200, data: res });
      });
    }
  });
});

instance.delete("/api/products/:id", function(request, response) {
  var tokenReceived = request.headers.authorization.split(" ")[1];
  jwt.verify(tokenReceived, instance.get("jwtSecret"), function(err, decoded) {
    console.log("In verify");
    if (err) {
      console.log("In auth error");
      response.send({ success: false, message: "Token verification failed" });
    } else {
      console.log("In auth success");
      request.decoded = decoded;

      var id = request.params.id;
      console.log("Received id =" + id);
      productModel.findByIdAndDelete({ ProductId: id }, function(err, res) {
        if (err) {
          respose.status = 500;
          response.send({ status: respose.status, error: err });
        }
        response.send({ status: 200, data: res });
      });
    }
  });
});

instance.listen(4040, function() {
  console.log("Started listening on port 4040");
});
