import React from "react"
import { Link } from "react-router-dom"

class NavBarPreloginButtons extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Link to = "/create_user"><button className = "navbar-button">Create User</button></Link>
        <Link to = "/login" className = "sign-in-button">Sign In</Link>

      </React.Fragment>
    )
  }
}

export default NavBarPreloginButtons
