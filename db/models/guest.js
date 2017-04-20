'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('guests', {
  name: STRING,
  address: STRING,
  city: STRING,
  state: STRING,
  zip: INTEGER,
  email: {
    type: STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  }
})

module.exports.associations = (Guest, {Order}) => {
  Guest.belongsTo(Order)
}
