import React, { Component } from 'react'

class PhotoCard extends Component {

  render() {
    return (
      <div className='photo-card'>
      <img src={this.props.photoObj.url} />
      </div>
    )
  }
}

export default PhotoCard;
