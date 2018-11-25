import React from "react"
import { IoIosContacts } from "react-icons/io";
import { Link } from 'react-router-dom';


class NavBar extends React.Component{

  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-nav">
        <Link to = "/"> <IoIosContacts className = "navbar-icon"/> BizHub <span className="sr-only">(current)</span></Link>
        </div>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <Link to = "/login"><button className = "btn btn-outline-success">Sign In</button></Link>
        <Link to = "/create_user"><button className = "btn btn-outline-success">Create User</button></Link>
      </nav>
    )
  }

}

export default NavBar
