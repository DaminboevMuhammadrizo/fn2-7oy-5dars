const express = require("express")
const morgan = require('morgan')
const userRouter = require('./routes/user.route')

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.get('/health', (req, res) => {
  res.send("Success")
})

app.use('/users', userRouter)

const errHandler = (err, req, res, next) => { }

app.use((err, req, res, next) => errHandler(err, req, res, next))

module.exports = app
