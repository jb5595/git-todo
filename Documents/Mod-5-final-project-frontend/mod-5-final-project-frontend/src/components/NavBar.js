import React from "react"
import { IoIosContacts } from "react-icons/io";
import { Link } from 'react-router-dom';
import NavbarSearch from "./NavbarComponents/NavbarSearch"
import NavBarPreloginButtons from "./NavbarComponents/NavbarPreloginButtons"
import { connect } from "react-redux"


class NavBar extends React.Component{

  render(){
    return(
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-nav">
          <Link to = "/"> <IoIosContacts className = "navbar-icon"/> BizHub <span className="sr-only">(current)</span></Link>
          </div>
          <NavbarSearch history = {this.props.history}/>

          <div>
            {this.props.currentUser ?<Link to = "/post/question"><button className = "navbar-button">Ask an Expert</button></Link>:<NavBarPreloginButtons/>}
          </div>
        </nav>
        <nav className="navbar sub-nav navbar-dark bg-dark">
          <Link to = "/experts">Find an Expert</Link>
          <Link to = "/questions">Browse Questions</Link>
          <Link to = ""> Create Expert Account</Link>
        </nav>
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) =>{
  return {currentUser: state.userSession.currentUser}
}

export default connect(mapStateToProps)(NavBar)
