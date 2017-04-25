'use strict'

const db = require('APP/db')
const Guest = db.model('guests')
const Order = db.model('order')

module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    // (What req.body is...) req.body = {orderId: orderId, guestEntry: {...}}
    const guest = req.body.guestEntry
    const orderId = +req.body.orderId
    Guest.create(guest)
    .then(guest => {
      return guest.setOrder(orderId) 
    })
    .then(() => res.sendStatus(201))
    .catch(next)
    })
    
  // .get('/:id',
  //   (req, res, next) =>
  //     User.findById(req.params.id)
  //     .then(user => res.json(user))
  //     .catch(next))
  .get('/:orderId', (req, res, next) => {
    Guest.findOne({
      where: { order_id: +req.params.orderId }
    })
    .then(guestInfo =>
      res.send(guestInfo)
    )
    .catch(next)
  })
