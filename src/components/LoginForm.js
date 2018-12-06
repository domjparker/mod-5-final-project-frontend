import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../store'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state.username.toLowerCase(), this.state.password)
    .then(this.props.history.push(`/users/profile`))

  }

  handleChange = (e) => {
    e.preventDefault()
    let change = { [e.target.name]: e.target.value }
    this.setState(change)
  }

  render() {
    return (
      <div id='login-container'>
        <form id="login-form">
          <TextField onChange={this.handleChange} type="text" name="username"
          id="outlined-login-username-input"
          label="Username"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="password" name="password"
          id="outlined-login-password-input"
          label="Pasword"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <br />
          <Button onClick={this.handleLogin} variant="outlined" color="primary">Login</Button>
        </form>
        <br />
        <Link to='/signup'>
        <Typography variant="h6">
          New User?
        </Typography>
        </Link>
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
