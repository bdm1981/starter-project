const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001;

const app = express();

app.get('/', function(req, res){
  res.sendStatus(200);
});

app.listen(port, function(err){
  if(err){
    console.error(err);
  }else{
    console.log('Start Project running on port: '+port);
  }
})