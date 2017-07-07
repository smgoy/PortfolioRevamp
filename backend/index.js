var path = require('path');
var express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3000, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log('Server running on port: 3000');
});
