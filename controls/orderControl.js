const my_order=require("../models/order");



const my_Book=require("../models/book");




exports.place_item=async(request,response)=>{



    try{



        const {books}=request.body;



        const clientId=request.user.clientId;



        const totalAmount=0;




        for(const bookId of books){



            const my_book=await my_Book.findById(bookId);



            if(!my_book){



                return response.status(400).json({msg:"wrong id"});




            }



            totalAmount=totalAmount+my_book.price;



        }



        const new_orders=new my_order({



            user:clientId,books,totalAmount,



        });



        await new_orders.save();



        response.status(201).json({msg:"order placed"});




    }



    catch(er){


        console.log("error",er);



        response.status(500).json({msg:"error"});



    }



};





exports.get_every_item=async(request,response)=>{


    try{


        const my_orders=await my_order.find().populate("user").populate("books");



        response.status(200).json(my_orders);



    }



    catch(er){


        console.log("error",er);



        response.status(500).json({msg:"error"});




    }






};