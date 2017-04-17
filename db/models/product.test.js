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
            expect(product.name).to.equal('FDA Tomato 500'))
      )
    })
})