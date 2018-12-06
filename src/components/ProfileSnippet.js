import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class ProfileSnippet extends Component {

  handleClick = () => {
    this.props.history.push(`/users/${this.props.user.id}`)
  }

  render() {
    return (
      <Link to={`/users/${this.props.user.id}`}>
      <div id='profile-snippet'>
        <img alt="current-user-avatar" src={this.props.user.profile_photo} id='profile-snippet-img'/>
        <div id='profile-snippet-content'>
          {this.props.user.name}
        </div>
      </div>
      </Link>
    )
  }
}

export default withRouter(ProfileSnippet)
