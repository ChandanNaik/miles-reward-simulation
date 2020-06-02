const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('src')) //Setting up static path used in src

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname,'/index.html')); // Render index.html
});

app.listen(process.env.PORT || 5000); //For automatic port selection in heroku
