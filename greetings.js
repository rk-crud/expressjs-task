const express = require('express')
const router = express.Router();
router.get('/',function(req,res){
    if(req.query.name){
        res.send(`Welcome, ${req.query.name}`)
    }else{
        res.send('Welcome, Anonymous!')
    }
})

module.exports = router;