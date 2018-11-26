import React from "react"
import { IoIosContacts } from "react-icons/io";
import { Link } from 'react-router-dom';


class NavBar extends React.Component{

  render(){
    return(
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-nav">
          <Link to = "/"> <IoIosContacts className = "navbar-icon"/> BizHub <span className="sr-only">(current)</span></Link>
          </div>
          <form className="col-6">
            <input className="form-control" type="search" placeholder="Search BizHub..." aria-label="Search"/>
            <div className = "navbar-search-results-preview-container">
              <div className = "nav-bar-search-result-title">
                Q&A
              </div>
              <div className = "nav-bar-search-result">
                Result
              </div>
            </div>
          </form>
          <div>
            <Link to = "/create_user"><button className = "create-user-button">Create User</button></Link>
            <Link to = "/login" className = "sign-in-button">Sign In</Link>

          </div>
        </nav>
          <nav className="navbar sub-nav navbar-dark bg-dark">
              <Link to = "/questions">Browse Questions</Link>
              <Link to = "/post/question">Ask an Expert</Link>
          </nav>
      </React.Fragment>
    )
  }

}

export default NavBar
