var express = require('express');
var app = express();
require('dotenv').config()

const messageStyle = process.env.MESSAGE_STYLE


app.get('/',(req,res)=>{
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
  })
  
  app.use('/public', express.static(__dirname+"/public"))
  
  app.get('/json',(req,res)=>{
    if(messageStyle === "uppercase"){
      return res.json({"message": "HELLO JSON"})
    }
    return res.json({"message": "Hello json"})
  })  




































 module.exports = app;
