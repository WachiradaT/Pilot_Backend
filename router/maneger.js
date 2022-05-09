const express = require('express')
const { manegerModel } = require('../models/maneger_model')
const router = express.Router()
const {postManeger, updateManeger, deleteManeger} = require('../service/maneger_service')

router.post('/addManeger', async (req,res)=>{
    const result = await postManeger(req.body)
    res.send(result)

})

router.put('/updateManegerById/:id', async (req, res) => {
    const result = await updateManeger(req.params.id, req.body)
    res.send(result)
})

router.delete('/deleteManegerById/:id', async (req, res) => {
    const result = await deleteManeger(req.params.id)
    res.send(result)
})

module.exports = router