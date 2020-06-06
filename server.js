const express =require('express') ;
const app=express();
app.get('/',(req,res)=>{

    const user={
        name:'abdelhadi',
        password:'secret'
    };
    res.send(user)

});
app.listen(3000)