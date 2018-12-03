import React, { Component } from 'react'
// import { connect } from 'react-redux'
import PhotoCard from './PhotoCard'

class ProfileBody extends Component {

  getPhotoCards = () => {
    if (this.props.user.photos) {
      let photoCards = this.props.user.photos.map(photoObj => {
        return <PhotoCard photoObj={photoObj} user={this.props.user} key={photoObj.id} alt={photoObj.caption}/>
      })
      return photoCards
    }
  }

  render() {
    return (
      <div id='profile-body'>
      {this.props.user && this.getPhotoCards()}
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.auth.currentUser
//   }
// }

export default ProfileBody;
