const { response } = require('express');
const express = require('express');
const app = express();
app.get('/',(request,response)=>{
    response.send('HELLO ');
})
app.listen(8000,()=>{
    console.log('服务启动');
})