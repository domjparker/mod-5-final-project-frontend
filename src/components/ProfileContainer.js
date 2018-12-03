import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'
import { Redirect, withRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { loadSelectedUser } from '../store'



class ProfileContainer extends Component {



  checkForUser = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to='/login' />
    }
  }

  componentDidMount() {
    this.checkForUser()
  }


  renderProfile = (props) => {
    const userId = parseInt(props.match.params.id)
    this.props.loadSelectedUser(userId)
    return (
      <div id='profile-container'>
        <ProfileHeader user={this.props.selectedUser}/>
        <ProfileBody user={this.props.selectedUser}/>
      </div>
    )
  }

  renderCurrentUserProfile = () => {
    return (
      <div id='profile-container'>
        <ProfileHeader user={this.props.currentUser}/>
        <ProfileBody user={this.props.currentUser}/>
      </div>
    )
  }



  render() {
    return (
      <Switch>
        <Route path="/users/:id" render={this.renderProfile}/>
        <Route path="/profile" render={this.renderCurrentUserProfile}/>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    selectedUser: state.photos.selectedUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSelectedUser: (userId) => dispatch(loadSelectedUser(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))
