const request = require('supertest')
    , {expect} = require('chai')
    , {Order} = require('APP/db')
    , app = require('./start')

/* global describe it before afterEach */

const order1 = {id: 1, status: 'pending'}
const order2 = {id: 1, status: 'confirmed'}

describe('/api/orders/', () => {
  // before('Await database sync', () => db.didSync)
  // afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  before('create order entries in db', () => {
    Order.create(order1)
    Order.create(order2)
  })
  describe('GET /status/:orderId', () => {
    it('returns status.orderId', () =>
    request(app)
      .get(`/api/order/status/1`)
      .expect(function(res) {
        expect(res.body).to.equal('pending')
      })
    )
    it('returns status.orderId', () =>
      request(app)
        .get(`/api/order/status/2`)
        .expect(function(res) {
          expect(res.body).to.equal('confirmed')
        })
    )
  }
  )
})
