'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('cartItem')

module.exports.associations = (cartItem, {Product, User}) => {
  cartItem.belongsTo(Product)
  cartItem.belongsTo(User)
}
