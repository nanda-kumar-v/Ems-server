require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./Routes/router')
const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use('/Uploads',express.static("./Uploads"))

const PORT = 4000 || process.env.PORT
server.listen(PORT,()=>{
    console.log(`Ems Server Started At Port ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send("<h2 style='margin:50px'>Ems Server Running</h2>")
})