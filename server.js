const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const logsRoute = require('./routes/logs')
const productsRoute = require('./routes/getProducts')
const passport = require('passport')
const cors = require('cors')
const cookieParser = require('cookie-parser')

dotenv.config()

const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '50mb', extended: true }))
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
)
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())

require('./services/passport')(passport)

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db!')
)

const db = mongoose.connection

db.on('error', (err) => console.log('db error ' + err))

app.use('/api/user', authRoute)
app.use('/api/logs', logsRoute)
app.use('/api/products', productsRoute)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

module.exports = db
