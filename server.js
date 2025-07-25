const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3000

server.listen(PORT, ()=> console.log(`Port is working...${PORT}`))


server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    cressOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "http: data:"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/', router)
server.set('view engine', 'ejs')
