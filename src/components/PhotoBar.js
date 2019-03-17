import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { postLike } from '../store'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

class PhotoBar extends Component {
  state = {
    currentUserLikedPhoto: false
  }

  handlePhotoLike = () => {
    console.log('PHOTO ID', this.props.selectedPhoto.id)
    console.log('Current User ID', this.props.currentUser.id)
    this.setState({
      currentUserLikedPhoto: !this.state.currentUserLikedPhoto
    })
  }

  componentDidUpdate(){
    console.log('MOUNTED')
    if (this.props.selectedPhoto.likes){
      let like = this.props.selectedPhoto.likes.filter((like) => { return like.user_id === this.props.currentUser.id})
      console.log(like)
    }
      // if(like.user_id === this.props.currentUser.id){
      //   console.log('CURRENT USER LIKES PHOTO')
      // }
      // else {
      //   console.log('CURRENT USER DOES NOT LIKE PHOTO')
      // }
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
    selectedPhoto: state.photos.selectedPhoto,
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLike: (photoId, userId) => dispatch(postLike(photoId, userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoBar))
