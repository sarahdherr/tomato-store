'use strict'

const db = require('APP/db')
    , {Product} = db
    , {expect} = require('chai')

/* global describe it before afterEach */

describe('Product', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('the product', () => {
    it('has a specified name', () =>
      Product.create({ name: 'FDA Tomato 500' })
        .then(product => 
          { console.log('PRODUCT', product.name)
            expect.product.name.to.equal('FDA Tomato 500')
        })
      )

    })
    // it("resolves false if the name doesn't match", () =>
    //   Product.create({ name: 'ok' })
    //     .then(product => product.authenticate('not ok'))
    //     .then(result => expect(result).to.be.false))
   //})
})