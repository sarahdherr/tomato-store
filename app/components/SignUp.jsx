import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (evt) => {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.setUser(this.state)
  }

  render() {
    return (
    <div>
      {!this.props.user
      ? <div>
      <h3>Sign Up</h3>
      <form className='form-horizontal' onSubmit={this.handleSubmit} >
        <div>
          <label>Name:</label>
          <input name='name' onChange={this.handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input name='email' onChange={this.handleChange} />
        </div>

        <div>
          <label>Password:</label>
          <input name='password' type='password' onChange={this.handleChange} />
        </div>

        <button type='submit' value='Sign Up'>SIGN UP</button>
      </form>
      </div>
      : <div>
      <h3>You are Logged in.</h3>
      <button type='submit' onClick={ (e) => this.props.logout() }>Logout</button>
      </div>
    }
    </div>
    )
  }
}
