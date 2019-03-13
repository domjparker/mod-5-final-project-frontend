import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'
import PhotoContainer from './PhotoContainer'
// import PhotoCard from './PhotoCard'
import { withRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { loadSelectedUser } from '../store'



class ProfileContainer extends Component {

  state={
    selectUserId: '',
    loadedSelectedUser: false
  }


  checkForUser = () => {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/login')
      return false
    } else {
      return true
    }

  }

  getSelectedUser = (userId) => {
    if (!this.state.loadedSelectedUser) {
      this.props.loadSelectedUser(parseInt(userId))
      this.setState({loadedSelectedUser: true})
    }
  }

  renderProfile = () => {
    return (
      <div id='profile-container'>
        <ProfileHeader user={this.props.selectedUser} isUser={false}/>
        <ProfileBody user={this.props.selectedUser } isUser={false}/>
      </div>
    )
  }

  renderCurrentUserProfile = () => {
    return (
      <div id='profile-container'>
        <ProfileHeader user={this.props.currentUser} isUser={true}/>
        <ProfileBody user={this.props.currentUser} isUser={true}/>
      </div>
    )
  }

  renderCurrentUserLikes = () => {
    console.log('Current User Likes', this.props.currentUser.likes);
    let photoCards = this.props.currentUser.likes && this.props.currentUser.likes.map(like => {
      return <PhotoContainer key={like.photo_id} photoId={like.photo_id}/>
    })
    return (
      <div id='likes-container'>
        {photoCards}
      </div>
    )
  }


  componentDidMount(){
      this.checkForUser()
      console.log('PATH NAME', this.props.location.pathname);
      this.props.userId && this.getSelectedUser(this.props.userId)
  }



  render() {
    return (
      <Switch>
        <Route path="/users/likes" render={this.renderCurrentUserLikes}/>
        <Route path="/users/profile" render={this.renderCurrentUserProfile}/>
        <Route path="/users/:id" render={this.renderProfile}/>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    selectedUser: state.photos.selectedUser,
    allUsers: state.auth.allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSelectedUser: (userId) => dispatch(loadSelectedUser(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))
