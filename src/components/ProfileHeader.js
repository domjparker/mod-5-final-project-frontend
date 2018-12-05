import React, { Component } from 'react'
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
        <div id='profile-header-left'>
          <img alt="current-user-avatar" src={this.props.user.profile_photo} />
        </div>
        <div id='profile-header-right'>
          <div id='profile-header-content'>
          <p>{this.props.user && this.props.user.name}</p>
          <Button onClick={this.handleLogout} variant="outlined" color="primary">Logout</Button>
          </div>
        </div>

      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.auth.currentUser
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(removeCurrentUser())
  }
}


export default withRouter(connect(null, mapDispatchToProps)(ProfileHeader))
