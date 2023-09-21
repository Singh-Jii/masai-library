const exp=require("express");


const my_route=exp.Router();


const clientControl=require("../controls/userControl");



my_route.post("/register",clientControl.register);



my_route.post("/login",clientControl.login);



module.exports=my_route;