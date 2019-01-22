import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div className="ui secondary menu">
        <NavLink activeClassName="active" className="item" to="/login">
          Login
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/profile">
          Profile
        </NavLink>
        <NavLink activeClassName="active" className="item" to="/signup">
          Register
        </NavLink>
        <NavLink className="item right" to="/logout">
          Logout
        </NavLink>
      </div>
    )
  }
}

export default Nav
