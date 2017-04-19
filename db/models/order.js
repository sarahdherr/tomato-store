'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('order', {}, {})

module.exports.associations = (Order, {OrderItem, Product, User}) => {
  Order.belongsToMany(Product, {through: OrderItem})
  Order.hasMany(OrderItem, {as: 'orderItems'})
  Order.belongsTo(User)
}
