const express = require('express');
const greetingsRoute = require('./greetings')
const travelRoute = require('./travel')
const PORT = process.env.SERVER_PORT || 3000;
const server = express();

server.get('/', function(req, res) {
  res.send('Welcome to my API!')
});

server.use('/greetings', greetingsRoute)
server.use('/travel', travelRoute)

server.listen(PORT, function () {
  console.log(`Server started and listening on http://localhost:${PORT}/`);
});
