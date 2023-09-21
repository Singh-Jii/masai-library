const my_Book=require("../models/book");



exports.get_every_item=async(request,response)=>{



    try{


        const books=await my_Book.find();



        response.status(200).json(books);



    }


    catch(er){



        console.log("error",er);



        response.status(500).json({msg:"error"});



    }



};





exports.get_books_with_id=async(request,response)=>{



    try{



        const my_book=await my_Book.findById(request.params.id);



        if(!my_book){



            return response.status(404).json({msg:"books are not available."});





        }



        response.status(202).json(my_book);



    }



    catch(er){



        console.log("error",er);



        response.status(500).json({msg:"error"});



    }



};






exports.get_items_with_category_author=async(request,response)=>{



    try{


        const {category,author}=request.quert;



        const empty={};



        if(category){



            empty.category=category;



        }



        if(author){



            empty.author=author;



        }



        const books=await my_Book.find(empty);



        response.status(200).json(books);




    }



    catch(er){



        console.log("error",er);



        response.status(500).json({msg:"error"});



    }



};





exports.plusBook=async(request,response)=>{



    try{


        const {title,author,category,price,quantity}=request.body;



        const new_item=new my_Book({title,author,category,price,quantity});



        await new_item.save();



        response.status(201).json({msg:"item added"});



    }



    catch(er){



        console.log("error",er);



        response.status(500).json({msg:"error"});





    }




};





exports.update_book=async(request,response)=>{



    try{



        const {title,author,category,price,quantity}=request.body;



        await my_Book.findByIdAndUpdate(request.params.id,{



            title, author,category,price,quantity,



        });



        response.status(204).end();



    }



    catch(er){



        console.log("error",er);



        response.status(500).json({msg:"error"});




    }




};






exports.del_book=async(request,response)=>{



    try{



        await my_Book.findByIdAndDelete(request.params.id);



        response.status(202).json({msg:"item deleted"});



    }



    catch(er){



        console.log("error",er);




        response.status(500).json({msg:"error"});




    }





};