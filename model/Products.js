const mongoose = require('mongoose')
const newData = require('../utils/script')
const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: String,
  description: String,
  image: String,
})

const Product = mongoose.model('Product', productSchema, 'products')

const addProducts = (newData) => Product.create(newData)

module.exports = Product
