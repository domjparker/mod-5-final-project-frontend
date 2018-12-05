import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllUsers } from '../store'
import ProfileSnippet from './ProfileSnippet'

class SearchContainer extends Component {

  state = {
    search: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    let change = { [e.target.name]: e.target.value }
    this.setState(change)
  }

  loadProfileSnippets = () => {
    const users = this.props.allUsers.filter(user => (user.name.includes(this.state.search) || user.username.includes(this.state.search)))
    return users.map(user => <ProfileSnippet key={user.id} user={user}/>)
  }

  componentDidMount() {
    this.props.getAllUsers()
  }


  render() {
    return (
      <div id='search-container'>
        <TextField
          onChange={this.handleChange}
          id="outlined-search-input"
          label="Search"
          className='text-field'
          type="search"
          name="search"
          autoComplete="search"
          margin="normal"
          variant="outlined"
        />
        <div id='search-results'>
          {this.state.search && this.loadProfileSnippets()}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    allUsers: state.auth.allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer))
