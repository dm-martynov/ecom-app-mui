const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')

dotenv.config()

const port = process.env.PORT || 3001

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db!')
)

app.use(express.json())

app.use('/api/user', authRoute)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
