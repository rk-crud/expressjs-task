const express = require('express')
const router = express.Router();

//logger function added
function loggerMiddleware(req,res,next){
    console.log(`LOG: ${req.originalUrl} called on at ${Date().toString()}`)
    console.log(`${req.originalUrl} called by ${req.param('name')}`)
    next()
  }

router.use(loggerMiddleware)

// router.get('/', loggerMiddleware, function(req,res, next){ })

router.get('/', function(req,res, next){
    if(req.query.name){
        res.send(`Welcome, ${req.query.name}`)
    }else{
        res.send('Welcome, Anonymous!')
    }
})


module.exports = router;