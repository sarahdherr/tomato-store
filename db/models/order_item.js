'use strict'

const {Product} = require('APP/db')
const {STRING, INTEGER} = require('sequelize')

// columns: order_id, product_id, quantity
module.exports = db => db.define('order_item', {
  quantity: INTEGER,
}, {
  getters: {
    // We are not using this right now, generating the subtotal from the store data in the Cart Component
    subtotal: function() {
      const quantity = this.quantity
      return Product.findById(this.product_id)
        .then(product => 
          quantity * product.price
        )
        .catch(err => console.error(err))
    }
  }
})

module.exports.associations = (OrderItem, {Product, Order}) => {
  OrderItem.belongsTo(Product)
  OrderItem.belongsTo(Order)
}
