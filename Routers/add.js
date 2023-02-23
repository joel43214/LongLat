const express = require('express')
const router = express.Router()
const {check,validationResult} = require('express-validator')
const bodyparser = require('body-parser')

router.get('/fill',(req,res)=>{
    res.render('form')
})
router.post('/',[
    check('latitude').notEmpty().withMessage('Please fill this field'),
    check('longitude').notEmpty().withMessage('Please fill this field'),
    check('altitude').notEmpty().withMessage('Please fill this field')
],(req,res)=>{
     const {latitude, longitude, altitude} = req.body || {};
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.status(404).send({errors:errors.array()})
    }

})

module.exports = router