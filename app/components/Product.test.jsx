import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import Product from './Product'

/* global describe it beforeEach */
describe('<Product />', () => {
  const tomato = {
    name: 'TomTom Tomato',
    imageURL: 'https://www.ethno-botanik.org/Tomaten/Green_Sausage/Fotos/300/Green_Sausage_15.jpg',
    price: 3,
    quantity: 100,
  }

  let root
  beforeEach('render the single view', () =>
    root = shallow(<Product {...tomato} />)
  )

  it('renders with a name and image', () => {
    expect(root.find('img')).to.have.length(1)
    expect(root.find('h1').text()).equal(tomato.name)
  })
})
