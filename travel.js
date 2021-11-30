const express = require('express')
const router = express.Router();
router.get('/',function(req,res){
    const from = req.query.from;
    const to = req.query.to
    if(from){
        res.json({
            staringcity: from,
            destination: to,
            bus: 'Red Bus',
            fare: '1000rs'
        });
    } else{
        res.status(404).json({
            error: 'enter starting or destination city'
        })
    }
})

router.get('/:from',function(req,res){
    const from = req.params.from;
        res.json({
            staringcity: from,
            destination:  [{city: 'chennai'},{city:'hyderabad'}],
            bus: 'Red Bus',
            fare: '1000rs'
        });
})

router.get('/:from/:to',function(req,res){
    const city = req.params.from;
    const city2 = req.params.to;
        res.json({
            staringcity: city,
            destination: city2,
            bus: 'Red Bus',
            fare: '1000rs'
        });
})

module.exports = router;