var express = require('express');
var app = express();
var path = require('path');
var portDecision = process.env.PORT || 3000;


// serve static files
app.use(express.static(path.resolve('./server/public')));

// server index file
app.get('/home', function(req, res) {
    res.send("hello from the server");
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.listen(portDecision, function() {
  console.log("server running, check localhost:", portDecision);
});
