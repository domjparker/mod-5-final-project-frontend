import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser } from '../store'

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.loginUser(e.target.username.value, e.target.password.value)
    .then(this.props.history.push(`/profile`))

  }

  handleChange = (e) => {
    e.preventDefault()
    let change = { [e.target.name]: e.target.value }
    this.setState(change)
  }

  render() {
    return (
      <div id='login-form'>
        <form onSubmit={this.handleLogin} id="login-form">
          <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/>
          <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
          <button>Login</button>
        </form>
        <Link to='/signup'>New User?</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
