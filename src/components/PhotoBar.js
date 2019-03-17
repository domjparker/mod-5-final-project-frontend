import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PhotoBar extends Component {



  render(){
    return(
      <div className='photo-bar'>
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
