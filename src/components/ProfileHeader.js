import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { connect } from 'react-redux'

class ProfileHeader extends Component {

  render() {
    return (
      <div id='profile-header'>
        <div id='profile-header-img'>
          <Avatar alt="current-user-avatar" src="https://pbs.twimg.com/profile_images/733186212177936388/Ke3m8oMt_400x400.jpg" id='avatar'/>
        </div>
        <div id='profile-header-content'>
          <h3>{this.props.currentUser.name}</h3>
          <h4>Bio</h4>
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



export default connect(mapStateToProps)(ProfileHeader)
