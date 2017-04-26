import React from 'react'
import {login, logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import axios from 'axios'

export const Login = ({ login, logout, user }) => {
  return (
    <div>
      {!user
      ? <div>
        <h3>Log in</h3>
          <form className='form-horizontal' onSubmit={evt => {
            evt.preventDefault()
            login(evt.target.username.value, evt.target.password.value)
          } }>
            <div>
              <label>Email:</label>
              <input name="username" />
            </div>
            <div>
              <label>Password:</label>
              <input name="password" type="password" />
            </div>
            <button type="submit" value="Login">LOGIN</button>
          </form>
          <div className="clearfix">
            <button type="submit" onClick={ (evt) => logout() }>Logout</button>
          </div>
      </div>
      : <div></div>
      }
    </div>
  )
}

// LoginContainer
export default connect(
  state => ({ user: state.auth }),
  {login, logout}
)(Login)
