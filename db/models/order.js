'use strict'

const Sequelize = require('sequelize')
module.exports = db => db.define('order', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'pending'
  }
}, {
  hooks: {
    //  Use Association Methods to access other models in this file.
    afterUpdate: function(order) {
      order.getOrderItems()
      .then(orderItems => orderItems.map(orderItem => {
        orderItem.getProduct()
        .then(product =>
          product.update(
            {inventory: product.inventory - orderItem.quantity}
        ))
      }))
      .catch(err => console.error(err))
    }
  }
})

module.exports.associations = (Order, {OrderItem, Product, User, Guest}) => {
  Order.belongsToMany(Product, {through: OrderItem})
  Order.hasMany(OrderItem, {as: 'orderItems'})
  Order.belongsTo(User)
  Order.hasOne(Guest)
}
