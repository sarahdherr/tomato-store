'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('order', {}, {})

module.exports.associations = (Order, {Product, User}) => {
  Order.belongsToMany(Product, {through: 'Order_Item'})
  Order.belongsTo(User)
}
