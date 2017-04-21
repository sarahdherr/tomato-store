'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('order', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'pending'
  }
}, {})

module.exports.associations = (Order, {OrderItem, Product, User}) => {
  Order.belongsToMany(Product, {through: OrderItem})
  Order.hasMany(OrderItem, {as: 'orderItems'})
  Order.belongsTo(User)
}
