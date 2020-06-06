const express =require('express') ;
const app=express();
app.get('/',(req,res)=>{

    app.use((req,res,next)=>{
       console.log("here it'll block if we wouldn't call the next function");
       next();
    });

    const user={
        name:'abdelhadi',
        password:'secret'
    };
    res.send(user)

});
app.listen(3000)