'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('product', {
  name: {
    type: STRING,
    allowNull: false
  },
  price: INTEGER,
  nutritionFacts: STRING,
  quantity: INTEGER,
  imageURL: STRING
})

module.exports.associations = (Product, {User, Order}) => {
  Product.belongsToMany(User, {as: 'cartItem', through: Order})
}
