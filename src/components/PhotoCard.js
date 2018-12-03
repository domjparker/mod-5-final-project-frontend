import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

class PhotoCard extends Component {

  handleClick = () => {
    this.props.history.push(`/users/${this.props.user.id}/photos/${this.props.photoObj.id}`)
  }

  render() {
    return (
      <div onClick={this.handleClick} className='photo-card'>
      <img alt={this.props.photoObj.caption} src={this.props.photoObj.url} />
      </div>
    )
  }
}

export default withRouter(PhotoCard);
