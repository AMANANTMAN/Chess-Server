//server.js
const express = require('express'), app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

var options = {
  root: path.join(__dirname)
};
function sendFile(fileName) {
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
}

//Basic routes
app.get('/', function(req, res){
    sendFile("index.html")
});
app.get('/summer', (req,res)=>{
   res.sendFile('/summer.html');
});

app.get('/winter',(req,res)=>{
   res.sendFile('/winter.html');
});

//Express error handling middleware
app.use((req,res)=>{
   res.type('text/plain');
   res.status(505);
   res.send('Error page');
});

//Binding to a port
app.listen(port,host, ()=>{
  console.log('Express server started at port 3000');
});