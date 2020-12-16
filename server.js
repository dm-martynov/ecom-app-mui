const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const productsRoute = require('./routes/getProducts')
const paymentRoute = require('./routes/payments')
const passport = require('passport')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '50mb', extended: true }))
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
)
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

require('./services/passport')(passport)

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db!')
)

const db = mongoose.connection

db.on('error', (err) => console.log('db error ' + err))

app.use('/api/user', authRoute)
app.use('/api/products', productsRoute)
app.use('/api/payment', paymentRoute)

app.listen(port, (error) => {
  if (error) throw error
  console.log(`Server running on port ` + port)
})

module.exports = db
