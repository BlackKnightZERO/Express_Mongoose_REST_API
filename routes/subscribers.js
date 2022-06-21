const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')

//get-all
router.get('/', async (req, res) => {
    try {
        const data = await Subscriber.find()
        res.json(data)
    } catch(err) {
        res.status(500)
            .json({message : err.message})
    }
})
//get-one
router.get('/:id', (req, res) => {
    
})
//create-one
router.post('/', async (req, res) => {

    const reqData = new Subscriber({
        name:      req.body.name,
        isActive:  req.body.isActive  
    })

    try {
        const data = await reqData.save()
        res.status(201)
            .json(data)
    } catch(err) {
        res.status(400)
            .json({message : err.message})
    }
})
//update-one
router.patch('/:id', (req, res) => {
    
})
//delete-one
router.delete('/:id', (req, res) => {
    
})

module.exports = router