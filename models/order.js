const mongo=require("mongoose");



const oschema=new mongo.Schema({



    user : { type: mongo.Schema.Types.ObjectId, ref: 'User' },



	books : [{ type: mongo.Schema.Types.ObjectId, ref: 'Book' }],



	totalAmount: Number,




});




module.exports=mongo.model("Order",oschema);



