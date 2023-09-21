const exp=require("express");



const my_route=exp.Router();



const bControl=require("../controls/bookControl");



const clientMiddleware=require("../middleware/auth");




my_route.get("/books",bControl.get_every_item);



my_route.get("/books/:id",bControl.get_books_with_id);



my_route.get("/books",bControl.get_items_with_category_author);



my_route.post("/books",clientMiddleware.auth_Admin,bControl.plusBook);



my_route.put("/books/:id",clientMiddleware.auth_Admin,bControl.update_book);



my_route.delete("/books/:id",clientMiddleware.auth_Admin,bControl.del_book);




module.exports=my_route;