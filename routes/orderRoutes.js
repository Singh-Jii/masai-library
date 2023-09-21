const exp=require("express");



const my_route=exp.Router();




const oControl=require("../controls/orderControl");





const clientMiddleware=require("../middleware/auth");





my_route.post("/order",clientMiddleware.authenticateClient,oControl.place_item);




my_route.get("/orders",clientMiddleware.auth_Admin,oControl.get_every_item);




module.exports=my_route;