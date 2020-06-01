const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('src'))

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(3000);
