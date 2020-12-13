const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const { registerValidation } = require('../validation')
const { loginValidation } = require('../validation')

router.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send('Email already exists')

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

  try {
    const userData = await User.addUser(newUser)
    res.json(userData)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const userDataFromDB = await User.getUserByEmail(req.body.email)
  if (!userDataFromDB) return res.status(400).send('Email or password is wrong')

  const validPass = await bcrypt.compare(
    req.body.password,
    userDataFromDB.password
  )
  if (!validPass) return res.status(400).send('Email or password is wrong')
  const token = jwt.sign(
    { _id: userDataFromDB._id },
    process.env.TOKEN_SECRET,
    {
      expiresIn: '48h',
    }
  )
  const { _id, name, email } = userDataFromDB

  res.json({ status: 'ok', token, _id, name, email })
})

module.exports = router
