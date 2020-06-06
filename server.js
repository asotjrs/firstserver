const http=require('http');

const   server=http.createServer((request,response)=>{
    const user={
        name:'abdelhadi',
        username:'asotjrs'
    };
    response.setHeader('Content-Type','application/json');
    response.end(JSON.stringify(user));
});
server.listen(3000);