import React from 'react'
import Login from './Login'
import Signup from '../containers/SignupContainer'

export default (props) => {
  return (
    <div>
      <div className='col-xs-6'>
        <Signup />
      </div>
      <div className='vertical-line'/>
      <div className='col-xs-5'>
        <Login />
      </div>
    </div>
  )
}