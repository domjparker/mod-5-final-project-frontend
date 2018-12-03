import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadSelectedPhotoAndUser } from '../store'

class PhotoContainer extends Component {

  componentDidMount() {
    this.props.loadSelectedPhotoAndUser(this.props.photoId)
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
    loadSelectedPhotoAndUser: (userId) => dispatch(loadSelectedPhotoAndUser(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoContainer))
