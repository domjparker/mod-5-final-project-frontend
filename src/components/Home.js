import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class Home extends Component {

  renderUserFeed = () => {
    return(
      <h1>Userfeed
      <br />
      coming
      <br />
      soon!</h1>
    )
  }

  renderWelcome = () => {
    return (

      <h1>Welcome!</h1>

    )
  }

  render() {
    const token = localStorage.getItem('token')
    return (
      <div id='home-container'>
      {!token && this.renderWelcome()}
      {token && this.renderUserFeed()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(Home))
