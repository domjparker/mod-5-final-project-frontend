import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

class PhotoBar extends Component {
  state = {
    currentUserLikedPhoto: false
  }

  handlePhotoLike = () => {
    console.log('LIKED PHOTO!', this.state.currentUserLikedPhoto)
    this.setState({
      currentUserLikedPhoto: !this.state.currentUserLikedPhoto
    })
  }

  render(){
    return(
      <div className='photo-bar'>
      {this.state.currentUserLikedPhoto ? <FavoriteIcon onClick={this.handlePhotoLike}/> : <FavoriteBorderIcon onClick={this.handlePhotoLike}/>}
        {this.props.selectedPhoto.likes && `${this.props.selectedPhoto.likes.length} Likes`}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selectedPhoto: state.photos.selectedPhoto
  }
}

// const mapDispatchToProps = (dispatch) => {
//
// }

export default withRouter(connect(mapStateToProps)(PhotoBar))
