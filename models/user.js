const mongo=require("mongoose");



const clientSchema=new mongo.Schema({



  name: String,


  email: String,



  password: String,



  isAdmin: Boolean,



});



module.exports=mongo.model("User",clientSchema);



