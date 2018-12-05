import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ProfileSnippet extends Component {

  handleClick = (user) => {
    console.log('CLICKING!', user);
    this.props.history.push(`/users/${user.id}`)
  }

  render() {
    return (
      <div id='profile-snippet' onClick={() => this.handleClick(this.props.user)}>
          <img alt="current-user-avatar" src={this.props.user.profile_photo} id='profile-snippet-img'/>
        <div id='profile-snippet-content'>
          {this.props.user.name}
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileSnippet)
