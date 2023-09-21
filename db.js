const application=require("./index");



const my_port=process.env.my_port || 3500;



application.listen(my_port,()=>{



    console.log(`${my_port}`);




});