import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadSelectedPhotoAndUser, setSelectedPhoto } from '../store'
import AnnotationCard from './AnnotationCard'

class PhotoContainer extends Component {

  showAnnotations  = () => {
    let annotationCards = this.props.selectedPhoto.annotations.map(annotation => <AnnotationCard key={annotation.id} annotationObj={annotation}/>)
    return(
      annotationCards
    )
  }

  componentDidMount() {
    //need to do a check to see if photo is in selectedUser.photos before going a fetch

    // Commented out because the photos in the selected user do not have annotations so always need to load photo aka do a fetch
    // const photo = (this.props.selectedUser.photos && this.props.selectedUser.photos.find(photo => photo.id === parseInt(this.props.photoId)))
    // if (photo) {
    //   console.log('PHOTO WAS IN SELECTED USER', photo);
    //   this.props.setSelectedPhoto(photo)
    // } else {
    //   console.log('HAD TO FETCH PHOTO');
    //   this.props.loadSelectedPhotoAndUser(this.props.photoId)
    // }
    this.props.loadSelectedPhotoAndUser(this.props.photoId)
  }

  render() {
    console.log('SELECTED PHOTO', this.props.selectedPhoto);
    return (
      <div className='photo-container'>
        <img className='photo-show' src={this.props.selectedPhoto.url} alt={this.props.selectedPhoto.caption}/>
        <div className='photo-info-container'>
        <p>{this.props.selectedPhoto.likes && `${this.props.selectedPhoto.likes.length} Likes`}</p>
        </div>
        <div className='annotations-container'>
        {this.props.selectedPhoto.annotations && this.showAnnotations()}
        </div>
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
