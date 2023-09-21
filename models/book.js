const mongo=require("mongoose");



const bschema=new mongo.Schema({




  title: String,



  author: String,



  category: String,



  price: Number,



  quantity: Number,




});




module.exports=mongo.model("Book",bschema);


