import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../store'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';

class SignUp extends Component {

  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_re: '',
    password_has_error: false
  }

  handleSignUp = (e) => {
    e.preventDefault()
    console.log(this.state);
    this.props.createUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then(this.props.history.push(`/profile`))

  }

  checkPassword = () => {
     if(this.state.password !== this.state.password_re) {
        this.setState({password_has_error:true});
    }
    else {
        this.setState({password_has_error:false});
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    let name = e.target.name
    let change = { [name]: e.target.value }
    this.setState(change, () => {
      if (name === 'password' || name === 'password_re')
        this.checkPassword()
    })
  }

  checkForUser = () => {
    if (localStorage.getItem('token')) {
      this.props.history.push('/users/profile')
    }
  }

  componentDidUpdate(){
      this.checkForUser()
  }


  render() {
    return (
      <div id='signup-container'>
        <form id="signup-form">
          <TextField onChange={this.handleChange} type="text" name="first_name"
          id="outlined-signup-first-name-input"
          label="First Name"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="text" name="last_name"
          id="outlined-signup-last-name-input"
          label="Last Name"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="text" name="email"
          id="outlined-signup-email-input"
          label="Email"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="text" name="username"
          id="outlined-signup-username-input"
          label="Username"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="password" name="password"
          id="outlined-signup-password-input"
          label="Password"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="password" name="password_re"
          id="outlined-signup-confirm-password-input"
          label="Confirm Password"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <br />
          <Button onClick={this.handleSignUp} variant="outlined" color="primary">Sign Up</Button>
        </form>
        <br />
        <Link to='/login'>
        <Typography variant="h6">
          Existing User?
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
    createUser: (user) => dispatch(createUser(user))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
