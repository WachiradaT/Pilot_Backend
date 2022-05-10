const express = require('express');
const {toolsModel} = require('../models/tools_model');
const { deleteToolsBytoolsId } = require('../service/tools_service');
const router = express.Router()

router.delete('/deleteToolsById/:id' , async(req,res)=>{
    const result = await deleteToolsBytoolsId(req.params.id)
    res.send(result)
} )

module.exports = router