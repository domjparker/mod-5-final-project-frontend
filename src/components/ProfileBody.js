import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhotoCard from './PhotoCard'

class ProfileBody extends Component {

  getPhotoCards = () => {
    if (this.props.currentUser.photos) {
      let photoCards = this.props.currentUser.photos.map(photoObj => {
        return <PhotoCard photoObj={photoObj} key={photoObj.id} alt={photoObj.caption}/>
      })
      return photoCards
    }
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div id='profile-body'>
      {this.props.currentUser && this.getPhotoCards()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(ProfileBody);
