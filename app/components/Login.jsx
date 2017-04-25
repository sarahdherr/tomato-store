import React from 'react'
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import axios from 'axios'

function handleGoogle(evt) {
  axios.get('/api/auth/login/google')
    .then(response => console.log(response.data))
    .catch(err => console.error(err))
}

function handleFacebook(evt) {
  axios.get('/api/auth/login/facebook')
    .then(response => console.log(response.data))
    .catch(err => console.error(err))
}

function handleGithub(evt) {
  axios.get('/api/auth/login/github')
    .then(response => console.log(response.data))
    .catch(err => console.error(err))
}

export const Login = ({ login }) => (
  <div>
    <h3>Log in</h3>
      <form className='form-horizontal' onSubmit={evt => {
        evt.preventDefault()
        login(evt.target.username.value, evt.target.password.value)
      } }>
        <div>
          <label>Username:</label>
          <input name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input name="password" type="password" />
        </div>
        
        <button type="submit" value="Login">LOGIN</button>
      </form>

      <button type="submit" onClick={handleFacebook}>Facebook</button>
      <button type="submit" onClick={handleGoogle}>Google</button>
      <button type="submit" onClick={handleGithub}>Github</button>
  </div>
)

export default connect(
  state => ({}),
  {login}
)(Login)

