const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')

//middleware
const getSubscriberMiddleware = async (req, res, next) => {
    let data
    try {
        data = await Subscriber.findById(req.params.id)
        if( data == null ) {
            return res.status(404)
                        .json({message: `Not Found`})
        }
    } catch(err) {
        res.status(500)
            .json({message: err.message})
    }

    res.customField = data
    next()
}

//REST_API

//get_all
router.get('/', async (req, res) => {
    try {
        const data = await Subscriber.find()
        res.json(data)
    } catch(err) {
        res.status(500)
            .json({message: err.message})
    }
})

//get_one
router.get('/:id', getSubscriberMiddleware, (req, res) => {
    res.json(res.customField)
})

//create_one
router.post('/', async (req, res) => {

    const saveData = new Subscriber({
        name:      req.body.name,
        isActive:  req.body.isActive  
    })

    try {
        const data = await saveData.save()
        res.status(201)
            .json(data)
    } catch(err) {
        res.status(400)
            .json({message: err.message})
    }
})

//update_one
router.patch('/:id', getSubscriberMiddleware, async (req, res) => {

    if( req.body.name != null) {
        res.customField.name = req.body.name
    }
    if( req.body.subscribeDate != null) {
        res.customField.subscribeDate = req.body.subscribeDate
    }
    if( req.body.isActive != null) {
        res.customField.isActive = req.body.isActive
    }

    try {
        const data = await res.customField.save()
        res.status(200)
            .json(data)
    } catch(err) {
        res.status(400)
            .json({message: err.message})
    }
})

//delete_one
router.delete('/:id', getSubscriberMiddleware, async (req, res) => {
    try {
        const data = await res.customField.remove()
        res.status(200)
            .json({message: `Deleted Successfully`})
    } catch(err) {
        res.status(500)
            .json({message: err.message})
    }
})

module.exports = router