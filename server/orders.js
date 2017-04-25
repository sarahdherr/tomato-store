// all routes rooted off of `/api/orders`

const db = require('APP/db')
const Order = db.model('order')
const Product = db.model('product')
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

  // Gets all order items based on the order id and returns all the order item data

  .get('/:orderId', function(req, res, next) {
    OrderItem.findAll({
      where: {
        order_id: req.params.orderId
      },
      include: [Product]
    })
    .then(orders => res.send(orders))
    .catch(next)
  })
  .put('/:orderId', function(req, res, next) {
    Order.findById(req.params.orderId)
      .then(order => order.update({ status: req.body.status }))
      .then(order => res.send(order))
      .catch(next)
  })

  // ROUTE FOR SETTING STATUS TO CONFIRMED IS PENDING

  // Get an individual order   /orders/status/id
  .get('/status/:orderId', (req, res, next) =>

    Order.findById(req.params.orderId)
    .then(order => {
      res.send(order.status)
    })
    .catch(next)
    )
