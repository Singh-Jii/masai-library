const jot=require("json-web-token");



const privacy=require("bcrypt");



const Client=require("../models/user");




const con=require("../config");




exports.register=async(request,response)=>{



    try{


        const {name,email,password,isAdmin}=request.body;



        const availabelClient=await Client.findOne({email});



        if(availabelClient){




            return response.status(400).json({msg:"client is available"});




        }



        const hpassword=await privacy.hash(password,12);



        const new_client=new Client({


            name,


            email,


            password:hpassword,



            isAdmin,



        });



        await new_client.save();



        response.status(201).json({msg:"registration completed"});




    }



    catch(er){



        console.log("error",er);



        response.status(500).json({msg:"error"});



    }



};




exports.login=async(request,response)=>{



    try{



        const {email,password}=request.body;



        const user=await Client.findOne({email});



        if(!user){



            return response.status(401).json({msg:"wrong credential"});




        }



        const is_password_correct=await privacy.compare(password,user.password);



        if(!is_password_correct){




            return response.status(401).json({msg:"wrong credential"});




        }



        const my_token=jot.sign({userId:user.id},con.jwtSecret,{



            expiresIn:"2h",




        });




        response.status(201).json({my_token});




    }



    catch(er){



        console.log("error",er);



        response.status(500).json({msg:"error"});



    }



};




