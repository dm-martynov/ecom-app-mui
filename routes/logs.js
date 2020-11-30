const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
  res.json([
    {
      action: 'changed currency from a to b',
      time: '24.11',
    },
    {
      action: 'changed currency from a to b',
      time: '24.11',
    },
  ])
})

module.exports = router
