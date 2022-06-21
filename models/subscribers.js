const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type:       String,
        required:   true
    },
    subscribeDate: {
        type:       String,
        required:   true,
        default:    Date.now
    },
    isActive:{
        type:       Boolean,
        required:   true,
        default:    true
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)
