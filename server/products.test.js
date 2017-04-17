const request = require('supertest')
    , {expect} = require('chai')
    , {Product} = require('APP/db')
    , app = require('./start')

/* global describe it before afterEach */

describe('/api/products', () => {
  //before('Await database sync', () => db.didSync)
  before('Make data in DB', () => {
    const tomato1 = { name: "Tomato Yum", price: 100, quantity: 3, imgUrl: "google.com/tomato" }
    const tomato2 = { name: "Tomato Tom", price: 30, quantity: 100, imgUrl: "bing.com/tomato" }

    Product.create(tomato1)
    Product.create(tomato2)
  })
  //afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /', () =>
    
    it('returns all products in the db', () =>
      request(app)
        .get(`/api/products`)
        .expect([tomato1, tomato2])
    ))

  // describe('POST', () =>
  //   describe('when not logged in', () => {
  //     it('creates a user', () =>
  //       request(app)
  //         .post('/api/users')
  //         .send({
  //           email: 'beth@secrets.org',
  //           password: '12345'
  //         })
  //         .expect(201))

  //     it('redirects to the user it just made', () =>
  //       request(app)
  //         .post('/api/users')
  //         .send({
  //           email: 'eve@interloper.com',
  //           password: '23456',
  //         })
  //         .redirects(1)
  //         .then(res => expect(res.body).to.contain({
  //           email: 'eve@interloper.com'
  //         })))
  //   }))
})
