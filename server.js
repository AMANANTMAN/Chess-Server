//server.js
const express = require('express'), server = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
let index;

function dirname(fileName) {
  return __dirname + "/" + fileName
}

//Basic routes
server.get('/',(requests,response)=>{
  response.sendFile(dirname("index.html"))
});
server.get('/summer', (request,response)=>{
   response.sendFile(dirname("summer.html"));
});

server.get('/winter',(request,response)=>{
   response.sendFile(dirname("winter.html"));
});

//Express error handling middleware
server.use((request,response)=>{
   response.type('text/plain');
   response.status(505);
   response.send('Error page');
});

//Binding to a port
server.listen(port,host, ()=>{
  console.log('Express server started at port 3000');
});