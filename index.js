const exp=require("express");



const mongo=require("mongoose");



const bp=require("body-parser");



const application=exp();




const con=require("./config");




mongo.connect(con.mongoURI,{useNewUrlParser:true,useInifiedTopology:true});




mongo.connection.on("connect",()=>{



    console.log("mongoDB connected");




});




mongo.connection.on("error",(er)=>{



    console.log("mongoDB not connected",er);




});




application.use(bp.json());




const clientRoute=require("./routes/userRoutes");



const bRoute=require("./routes/bookRoutes");



const oRoute=require("./routes/orderRoutes");





application.use("/api",clientRoute);



application.use("/api",bRoute);



application.use("/api",oRoute);




const my_port=process.env.my_port || 3500;




application.listen(my_port,()=>{



    console.log(`${my_port}`);




});




