const express = require('express')
// const cookieParser = require('cookie-parser')
const greetingsRoute = require('./greetings')
const travelRoute = require('./travel')
const blogRoute = require('./user')
const PORT = process.env.SERVER_PORT || 4000
const server = express()

server.use(express.json());
// server.use(cookieParser());

// function loggerMiddleware(req,res,next){
//   console.log(`LOG: ${req.originalUrl} called on at ${Date().toString()}`)
//   console.log(`${req.originalUrl} called by ${req.param['name']}`)
//   next()
// }
// server.use(loggerMiddleware)

server.get('/', function(req, res) {
  res.send('Welcome to my API!')
});

server.use('/greetings', greetingsRoute)
server.use('/travel', travelRoute)
server.use('/user',blogRoute) //created new route for post



server.listen(PORT, function () {
  console.log(`Server started and listening on http://localhost:${PORT}/`);
});
