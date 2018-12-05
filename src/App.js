import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import AppHeader from './components/AppHeader'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import ProfileContainer from './components/ProfileContainer'
import PhotoContainer from './components/PhotoContainer'
import SearchContainer from './components/SearchContainer'
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
      <ProfileContainer />
    )
  }

  renderProfile = () => {
      if(localStorage.getItem('token')) {
        return <ProfileContainer />
      }
      else {
        return <Redirect to='/login' />
      }
  }

  renderPhotoForm = () => {
    return (
      <PhotoForm />
    )
  }

  renderPhotoShow = (props) => {
    return (
      <PhotoContainer photoId={props.match.params.id}/>
    )
  }

  renderSearch = (props) => {
    return (
      <SearchContainer />
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
        <AppHeader />
        <Switch>
          <Route path="/login" render={this.renderLogin}/>
          <Route path="/signup" render={this.renderSignup}/>
          <Route path="/profile" render={this.renderProfile}/>
          <Route path="/search" render={this.renderSearch}/>
          <Route path="/photo/new" render={this.renderPhotoForm}/>
          <Route path="/users/:id/photos/:id" render={this.renderPhotoShow}/>
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
