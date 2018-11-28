import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { removeCurrentUser } from '../store'

class ProfileHeader extends Component {

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.logoutUser()
    this.props.history.push("/")
  }

  render() {
    return (
      <div id='profile-header'>
        <div id='profile-header-img'>
          <Avatar alt="current-user-avatar" src="https://pbs.twimg.com/profile_images/733186212177936388/Ke3m8oMt_400x400.jpg" id='avatar'/>
        </div>
        <div id='profile-header-content'>
          <h3>{this.props.currentUser.name}</h3>
          <h4>Bio</h4>
          <Button onClick={this.handleLogout} variant="outlined" color="primary">Logout</Button>
        </div>

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
    logoutUser: () => dispatch(removeCurrentUser())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileHeader))