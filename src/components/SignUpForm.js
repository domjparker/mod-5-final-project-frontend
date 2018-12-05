import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import { createUser } from '../store'

class SignUp extends Component {

  state = {
    first_name: '',
    last_name: '',
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

  render() {
    return (
      <div id='signup-container'>
        <form onSubmit={this.handleSignUp} id="signup-form">
          <input onChange={this.handleChange} type="text" name="first_name" placeholder="First Name"/>
          <input onChange={this.handleChange} type="text" name="last_name" placeholder="Last Name"/>
          <input onChange={this.handleChange} type="text" name="email" placeholder="Email"/>
          <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/>
          <input onChange={this.handleChange} type="password" name="password" placeholder="New Password"/>
          <input onChange={this.handleChange} type="password" name="password_re" placeholder="Confirm Password"/>
          <button>Sign Up</button>
        </form>
        <Link to='/login'>Existing User?</Link>
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
