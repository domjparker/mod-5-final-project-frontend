import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../store'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import AddBoxIcon from '@material-ui/icons/AddBox';


class NavBar extends Component {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
   this.setState({ value });
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    // this.setState({ auth: { currentUser: {} } })
    this.props.logoutUser()
    this.props.history.push("/")
  }

  oldNavBar = () => {
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

  handleClick = (e, route) => {
    e.preventDefault()
    this.props.history.push(route)
  }

  render() {
    // const token = localStorage.getItem('token')
    return (
      <BottomNavigation id='nav-bar' value={this.state.value} onChange={this.handleChange} >
        <BottomNavigationAction onClick={(e) => this.handleClick(e, '/')} label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={(e) => this.handleClick(e, '/search')} label="Search" value="search" icon={<SearchIcon />} />
        <BottomNavigationAction onClick={(e) => this.handleClick(e, '/photo/new')} label="Add Photo" value="addphoto" icon={<AddBoxIcon />} />
        <BottomNavigationAction onClick={(e) => this.handleClick(e, '/login')} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction onClick={(e) => this.handleClick(e, '/profile')} label="Profile" value="profile" icon={<PersonIcon />} />
      </BottomNavigation>
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
