// all routes rooted off of `/api/orders`

const db = require('APP/db')
const Order = db.model('order')
const OrderItem = db.model('order_item')
const Promise = require('bluebird')

module.exports = require('express').Router()
  // Adds an order with all the order items to the Order and OrderItem models
  .post('/', function(req, res, next) {
    // req.body.cart = [{quantity: int, product: {}}, ...]
    Order.create({})
    .then(order => {
      return order.setUser(req.body.userId)
    })
    .then(order => {
      // order.setUser(+req.body.userId)
      return Promise.map(req.body.cart, cartRow => {
        return OrderItem.create({
          order_id: order.id,
          quantity: cartRow.quantity,
          product_id: cartRow.product.id
        })
      })
      .then(order => {
        res.send(order)
      })
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
