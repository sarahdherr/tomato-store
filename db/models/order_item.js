'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('order_item', {
  quantity: INTEGER,
})

module.exports.associations = (OrderItem, {Product, Order}) => {
  OrderItem.belongsTo(Product)
  OrderItem.belongsTo(Order)
}
