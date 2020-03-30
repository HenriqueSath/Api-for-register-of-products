const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(
    "Your link of MongoDB Cluster!!",
    { useNewUrlParser: true, useUnifiedTopology: true }
)

app.use('/api', require('./src/routes'))

app.listen(3001)