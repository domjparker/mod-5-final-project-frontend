import React, { Component } from 'react'

class PhotoCard extends Component {

  render() {
    return (
      <div className='photo-card'>
      <img alt={this.props.photoObj.caption} src={this.props.photoObj.url} />
      </div>
    )
  }
}

export default PhotoCard;
