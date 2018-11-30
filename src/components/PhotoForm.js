import React, { Component } from 'react'
import { Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
// import Input from '@material-ui/core/Input'
import { postPhoto } from '../store'



class PhotoForm extends Component {
  state = {
    file: '',
    url: '',
    capiton: '',
    annotations: []
  }

  handleChange = (e) => {
    e.preventDefault()

    if (e.target.name === 'file') {
      console.log(e.target.files[0]);
      let change = { [e.target.name]: window.URL.createObjectURL(e.target.files[0]) }
      this.setState(change)
    } else {
      let change = { [e.target.name]: e.target.value }
      this.setState(change)
    }
  }

  checkForUser = () => {
    if (!localStorage.getItem('token')) {
      return <Redirect to='/login' />
    }
  }

  showWidget = (widget) => {
    widget.open()
  }

  checkUploadResult = (resultEvent, widget) => {
    console.log(resultEvent);
    if (resultEvent.event === 'upload-added') {

    }
    // if (resultEvent.event === 'success') {
    //   this.props.postPhoto({user_id: this.props.currentUser.id,
    //     caption: '',
    //     url: resultEvent.info.secure_url})
    //   .then(widget.close())
      // .then(this.props.history.push(`/profile`))
    // }
  }



  render() {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: "dnmpjwixe",
      uploadPreset: "tsdo8id4",
      multiple: false,
      croppingAspcectRatio: 1.0,
      resourceType: 'image',
      theme: 'minimal',
      buttonCaption: 'Upload Photo',
      //got rid of the default source options of camera(desktop support only) and facebook
      sources: [ 'local', 'url', 'instagram' ],
      // preBatch: (data, cb) => {
      //   console.log('Data:', data)
      //   console.log("CB:", cb.files[0])
      //   // widget.close({quiet: true})
      // }
      },
      (error, result) => { this.checkUploadResult(result, widget) })
      console.log(this.state);
    return (
      <div id='photo-form-container'>
        <h2>Add New Photo</h2>

        <Button onClick={() => this.showWidget(widget)} variant="outlined" color="primary">Upload Widget</Button>
        <form id='photo-form'>
        <div id="upload-button-wrapper">
        <Button id="upload-button" variant="outlined" color="primary">Upload a file</Button>
          {this.state.file ? <img id='photo-form-preview' alt='caption' src={this.state.file} /> : <input onChange={this.handleChange} type='file' name='file' accept="image/*,.pdf"/>}
        </div>
          <input onChange={this.handleChange} type="text" name="caption" placeholder="caption"/>
          <Button variant="outlined" color="primary">Add Photo</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postPhoto: (user, photo) => dispatch(postPhoto(user, photo))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoForm))
