import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../store'

class NavBar extends Component {

  handleLogout = () => {
    localStorage.removeItem("token")
    // this.setState({ auth: { currentUser: {} } })
    this.props.logoutUser()
    this.props.history.push("/")
  }

  render() {
    const token = localStorage.getItem('token')
    return (
      <div id='nav-bar'>
      <Link to={this.props.currentUser.id ? `/profile` : '/login'}><button>Profile</button></Link>
      <Link to="/photo/new"><button>+ Photo</button></Link>
      <Link to="/login"><button>Search</button></Link>
      {token ? <button onClick={this.handleLogout}>Logout</button> : <Link to="/login"><button>Login</button></Link>}
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
    logoutUser: () => dispatch(removeCurrentUser())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
