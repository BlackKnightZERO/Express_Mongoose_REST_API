const express = require('express')
const router = express.Router()

//get-all
router.get('/', (req, res) => {
    res.send('get-call called')
})
//get-one
router.get('/:id', (req, res) => {
    
})
//create-one
router.post('/', (req, res) => {

})
//update-one
router.patch('/:id', (req, res) => {
    
})
//delete-one
router.delete('/:id', (req, res) => {
    
})

module.exports = router