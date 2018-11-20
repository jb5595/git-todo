import React from "react"
import { IoIosContacts } from "react-icons/io";



class NavBar extends React.Component{

  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-nav">
          <a className="navbar-brand" href="#"> <IoIosContacts className = "navbar-icon"/> BizHub <span className="sr-only">(current)</span></a>
        </div>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }

}

export default NavBar
