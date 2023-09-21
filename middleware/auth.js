const jot=require("json-web-token");



const con=require("../config");



exports.authenticateClient=(request,response,next)=>{



    const my_token=request.header("Authorisation");



    if(!my_token){



        return response.status(401).json({msg:"error in authorisation"});




    }




    jot.verify(my_token,con.jwtSecret,(er,dec_token)=>{



        if(er){


            return response.status(401).json({msg:"error in authorisation"});




        }


        request.user=dec_token;


        next();




    });



};





exports.auth_Admin=(request,response,next)=>{



    const my_token=request.header("Authorisation");



    if(!my_token){



        return response.status(401).json({msg:"fail to authorise"});




    }



    jot.verify(my_token,con,jwtSecret,(er,dec_token)=>{



        if(er || !dec_token.isAdmin){



            return response.status(401).json({msg:"fail to authorise"});




        }



        request.user=dec_token;



        next();



    });




};