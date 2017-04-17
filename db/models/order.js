'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('order')

module.exports.associations = (order, {Product, User}) => {
  order.belongsTo(Product)
  order.belongsTo(User)
}
