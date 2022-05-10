const express = require('express')
const cors = require('cors')
const bodyParcer = require('body-parser')
const app = express()

const maneger = require('./router/maneger')
const tool = require('./router/tools')

app.use(cors())
app.use(bodyParcer.json())
app.use(bodyParcer.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.send('Hello world')
})



app.use('/maneger',maneger)
app.use('/tool', tool)





app.listen(3000, _ => {
    console.log('server is running at port 3000')
})