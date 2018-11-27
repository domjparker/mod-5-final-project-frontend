import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'
import { Redirect, Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class ProfileContainer extends Component {

  checkForUser = () => {
    if (!this.props.currentUser.id) {
      return <Redirect to='/login' />
    }
  }

  componentDidMount() {
    this.checkForUser()
  }

  render() {
    return (
      <div id='profile-container'>
        <ProfileHeader />
        <ProfileBody />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createUser: (user) => dispatch(createUser(user))
//   }
// }

export default withRouter(connect(mapStateToProps)(ProfileContainer))
