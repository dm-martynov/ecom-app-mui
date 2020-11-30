const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const authRoute = require('./routes/auth')

app.use('/api/user', authRoute)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
