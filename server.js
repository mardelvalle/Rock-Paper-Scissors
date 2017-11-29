console.log('May Node be with you')
const express = require('express');
const app = express();
app.listen(3000, function() =>{} {
  // app is saying express. Listen and get are parts of the express module
  console.log('listening on 3000')
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
