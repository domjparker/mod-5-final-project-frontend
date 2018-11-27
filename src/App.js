import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import ProfileContainer from './components/ProfileContainer'
import PhotoForm from './components/PhotoForm'
import { loadCurrentUser } from './store'

class App extends Component {

  renderLogin = () => {
    return (
      <LoginForm />
    )
  }
  renderSignup = () => {
    return (
      <SignUpForm />
    )
  }
  renderUser = () => {
    return (
      <div>USERFEED</div>
    )
  }

  renderProfile = () => {
    return (
      <ProfileContainer />
    )
  }

  renderPhotForm = () => {
    return (
      <PhotoForm />
    )
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.loadCurrentUser(token)
    }
  }

  render() {
    return (
      <div id='app-container'>
        <Switch>
          <Route path="/login" render={this.renderLogin}/>
          <Route path="/signup" render={this.renderSignup}/>
          <Route path="/profile" render={this.renderProfile}/>
          <Route path="/photo/new" render={this.renderPhotoForm}/>
          <Route path="/users" render={this.renderUser}/>
          <Route path="/" component={Home}/>
        </Switch>
        <NavBar />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentUser: (token) => dispatch(loadCurrentUser(token))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
