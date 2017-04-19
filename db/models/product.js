'use strict'

const {STRING, INTEGER, TEXT} = require('sequelize')

module.exports = db => db.define('product', {
  name: {
    type: STRING,
    allowNull: false
  },
  description: TEXT,
  price: INTEGER,
  nutritionFacts: STRING,
  inventory: INTEGER,
  imageURL: STRING
})

module.exports.associations = (Product, {Order}) => {
  Product.hasMany(Order)
}
