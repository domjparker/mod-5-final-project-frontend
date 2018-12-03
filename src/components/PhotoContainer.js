import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadSelectedPhotoAndUser, setSelectedPhoto } from '../store'

class PhotoContainer extends Component {

  componentDidMount() {
    //need to do a check to see if photo is in selectedUser.photos before going a fetch
    const photo = (this.props.selectedUser.photos && this.props.selectedUser.photos.find(photo => photo.id === parseInt(this.props.photoId)))
    if (photo) {
      console.log('PHOTO WAS IN SELECTED USER', photo);
      this.props.setSelectedPhoto(photo)
    } else {
      console.log('HAD TO FETCH PHOTO');
      this.props.loadSelectedPhotoAndUser(this.props.photoId)
    }
  }

  render() {
    return (
      <div id='photo-container'>
        <img className='photo-show' src={this.props.selectedPhoto.url} alt={this.props.selectedPhoto.caption}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPhoto: state.photos.selectedPhoto,
    selectedUser: state.photos.selectedUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSelectedPhotoAndUser: (userId) => dispatch(loadSelectedPhotoAndUser(userId)),
    setSelectedPhoto: (photo) => dispatch(setSelectedPhoto(photo))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoContainer))
