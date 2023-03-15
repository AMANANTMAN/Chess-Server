//app.js
const express = require('express'), app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
let index;

function dirname(fileName) {
  return __dirname + "/" + fileName
}

//Basic routes
app.get('/',(req,res)=>{
  res.sendFile(dirname("index.html"))
});

app.post('/', (req, res) => {
  const { username } = req.body;
  res.send({
    username
  });
});

app.get('/summer', (req,res)=>{
   res.sendFile(dirname("summer.html"));
});

app.get('/winter',(req,res)=>{
   res.sendFile(dirname("winter.html"));
});

//Express error handling middleware
app.use((req,res)=>{
   res.type('text/plain');
   res.status(505);
   res.send('Error page');
});

//Binding to a port
app.listen(port,host, ()=>{
  console.log('Express app started at port 3000');
});