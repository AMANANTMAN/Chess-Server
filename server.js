//server.js
const express = require('express'),
      server = express();

server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/',(requests,response)=>{
  response.sendFile('index.html')
});
server.get('/summer', (request,response)=>{
   response.sendFile('summer.html');
});

server.get('/winter',(request,response)=>{
   response.sendFile('winter.html');
});

//Express error handling middleware
server.use((request,response)=>{
   response.type('text/plain');
   response.status(505);
   response.send('Error page');
});

//Binding to a port
server.listen(80, ()=>{
  console.log('Express server started at port 3000');
});