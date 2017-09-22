const path = require('path');
const express = require('express');
const port= process.env.PORT || 3000; //for Heroku
var app = express();

const publicPath = path.join(__dirname, '../public');

//MIDDLEWARE
app.use(express.static(publicPath));

app.listen(port, ()=>{
  console.log(`Server is running on ${port}');
});
