const express =require('express');
const bodyPrser=require('body-parser');



const app=express();
app.use(bodyPrser.urlencoded({extended:false}));
app.use(bodyPrser.json());

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
app.post('/profile',(req,res)=>{
    console.log(req.body)
    const user={
        name:'abdelhadi',
        password:'secret'
    };
    res.send('successfully done ')
});
app.listen(3000);