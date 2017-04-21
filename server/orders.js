// all routes rooted off of `/api/orders`

const db = require('APP/db')
const Order = db.model('order')
const OrderItem = db.model('order_item')
const Promise = require('bluebird')

const fakeReqBody =  {cart: [{quantity: 2, product: {id: 1}}, {quantity: 1, product: {id: 2}}]}

module.exports = require('express').Router()
  // Adds an order with all the order items to the Order and OrderItem models
  .post('/', function(req, res, next) {
    // req.body.cart = [{quantity: int, product: {}}, ...]
    Order.create({})
    .then(order => {
      const orderPromises = fakeReqBody.cart.map(cart_row => {
        OrderItem.create({
          order_id: order.id,
          quantity: cart_row.quantity,
          product_id: cart_row.product.id
        })
      })
      return Promise.all(orderPromises)
    })
    .then(orderArrOfNulls => {
      res.end()
      console.log("You have made a new order of " + orderArrOfNulls.length + " item(s).")
    })
    .catch(next)
  })

  // Gets all order items based on the order id and returns all the order item data
  .get('/:orderId', function(req, res, next) {
    OrderItem.findAll({
      where: {
        order_id: req.params.orderId
      }
    })
    .then(orders => res.send(orders))
    .catch(next)
  })

  // Get an individual order   /orders/status/id
  .get('/status/:orderId', (req, res, next) =>
    Order.findById(req.params.orderId)
    .then(order => res.send(order.status))
    .catch(next)
    )
