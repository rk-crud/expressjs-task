const express = require('express')
const router = express.Router();

router.post('/sign-up', function(req,res){
  const body = req.body;
  res.json({
    email: body.email,
    password: body.password,
    status: 'Account Created'
  })
  
  })

  router.post('/new-post',function(req,res){
    const body = req.body;
    res.json({
      caption: body.caption,
      content: body.content,
      status: 'New Post Added',
    })

  })

module.exports = router;