import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { postPhoto } from '../store'



class PhotoForm extends Component {
  state = {
    file: '',
    fileObj: {},
    url: '',
    product_name: '',
    product_brand: '',
    product_shade: '',
    product_category: '',
    product_why: '',
    product_link: '',
    annotations: []
  }

  checkForUser = () => {
    !localStorage.getItem('token') && this.props.history.push('/login')
  }

  handleChange = (e) => {
    e.preventDefault()

    if (e.target.name === 'file') {
      // console.log('FILE', e.target.files[0])
      this.setState({fileObj: e.target.files[0], file: window.URL.createObjectURL(e.target.files[0])})
      // let change = { [e.target.name]: window.URL.createObjectURL(e.target.files[0]) }
      // this.setState(change)
    } else {
      let change = { [e.target.name]: e.target.value }
      this.setState(change)
    }
  }


  showWidget = (widget) => {
    widget.open()
  }

  checkUploadResult = (resultEvent, widget) => {
    // console.log(resultEvent);
    if (resultEvent.event === 'success') {
      this.props.postPhoto({user_id: this.props.currentUser.id,
        caption: '',
        url: resultEvent.info.secure_url
      })
      .then(widget.close())
      .then(this.props.history.push(`/users/profile`))
    }
  }

  uploadPhoto = (e, widget) => {
    e.preventDefault()
    // console.log('CLICK', widget);
    // widget.open()
    widget.open(null, {files: [this.state.fileObj]})
  }

  componentDidMount(){
    this.checkForUser()
  }

  render() {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: "dnmpjwixe",
      uploadPreset: "tsdo8id4",
      // multiple: false,
      // croppingAspcectRatio: 1.0,
      // resourceType: 'image',
      // theme: 'minimal',
      // buttonCaption: 'Upload Photo',
      // //got rid of the default source options of camera(desktop support only) and facebook
      // sources: [ 'local', 'url', 'instagram' ],
      // preBatch: (data, cb) => {
      //   console.log('Data:', data)
      //   console.log("CB:", cb.files[0])
      //   // widget.close({quiet: true})
      // }
      },
      (error, result) => { this.checkUploadResult(result, widget) })
    return (
      <div id='photo-form-container'>
        <h2>Add New Photo</h2>

        {/*<Button onClick={() => this.showWidget(widget)} variant="outlined" color="primary">Upload Widget</Button>*/}

        <div id="upload-button-wrapper">
          {this.state.file ? null : <Button id="upload-button" variant="outlined" color="primary">Choose a Photo</Button>}
          {this.state.file ? null : <input onChange={this.handleChange} type='file' name='file' accept="image/*,.pdf"/>}
        </div>
        <div id="photo-form-preview-div" >
        {this.state.file && <img id='photo-form-preview' alt='caption' src={this.state.file} />}
        </div>
        <div id='photo-form-div'>
        <form id='photo-form'>
          <TextField onChange={this.handleChange} type="text" name="product_name"
          label="Product Name"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="text" name="product_brand"
          label="Brand"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="text" name="product_shade"
          label="Shade"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="text" name="product_category"
          label="Category"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="text" name="product_why"
          label="Why you love it:"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <TextField onChange={this.handleChange} type="text" name="product_link"
          label="Link to Product"
          className='text-field'
          margin="normal"
          variant="outlined"/>
          <br />
          <Button variant="outlined" color="primary">Tag Product</Button>
          <br />
          <Button onClick={(e) => this.uploadPhoto(e, widget)} variant="outlined" color="primary">Add Photo</Button>
        </form>
        </div>
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
    postPhoto: (photo) => dispatch(postPhoto(photo))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoForm))
