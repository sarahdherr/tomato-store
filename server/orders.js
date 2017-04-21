// all routes rooted off of `/api/orders`

const db = require('APP/db')
const Order = db.model('order')
const OrderItem = db.model('order_item')
const Promise = require('bluebird')

// const fakeReqBody =  {cart: [{quantity: 2, product: {id: 1}}, {quantity: 1, product: {id: 2}}]}

module.exports = require('express').Router()
  // Adds an order with all the order items to the Order and OrderItem models
  .post('/', function(req, res, next) {
    // req.body.cart = [{quantity: int, product: {}}, ...]
    Order.create({})
    .then(order => {
      const orderPromises = req.body.cart.map(cartRow => {
        OrderItem.create({
          order_id: order.id,
          quantity: cartRow.quantity,
          product_id: cartRow.product.id
        })
      })
      return Promise.all(orderPromises)
      .then(() => order.id)
    })
    .then(orderId => {
      res.send(orderId)
    })
    .catch(next)
  })

  // Gets an order based on the order id and returns all the order item data
  .get('/:orderId', function(req, res, next) {
    OrderItem.findAll({
      where: {
        order_id: req.params.orderId
      }
    })
    .then(orders => res.send(orders))
    .catch(next)
  })
