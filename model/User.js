const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const User = (module.exports = mongoose.model('User', userSchema))

module.exports.getUserByEmail = async function (email) {
  const query = { email: email }
  const userDataFromDB = await User.findOne(query)
  return userDataFromDB
}

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback)
}

module.exports.addUser = async function (newUser) {
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(newUser.password, salt)
  newUser.password = hashPassword
  const savedUserData = await newUser.save()
  return savedUserData
}

module.exports.comparePassword = async function (passFromUser, passwordFromDb) {
  return await bcrypt.compare(passFromUser, passwordFromDb)
}
