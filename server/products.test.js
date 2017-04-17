const request = require('supertest')
    , {expect} = require('chai')
    , {Product} = require('APP/db')
    , app = require('./start')

/* global describe it before afterEach */

const tomato1 = {name: 'Tomato One', price: 100, quantity: 3, imageURL: 'google.com/tomato'}
const tomato2 = {name: 'Tomato Two', price: 2000, quantity: 100, imageURL: 'bing.com/tomato'}

describe('/api/products', () => {
  // before('Await database sync', () => db.didSync)
  // afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  before('create product entries in db', () => {
    Product.create(tomato1)
    Product.create(tomato2)
  })
  describe('GET /', () =>
    it('returns all products', () =>
      request(app)
        .get(`/api/products`)
        .expect(function(res) {
          expect(res.body.length).to.equal(2)
        })
    )
  )
})
