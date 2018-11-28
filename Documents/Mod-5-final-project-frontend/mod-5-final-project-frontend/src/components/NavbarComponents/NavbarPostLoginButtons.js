import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../../actions/CurrentUserActions"

class NavBarPostloginButtons extends React.Component {
  render(){
    return(
      <React.Fragment>
      <Link to = "/post/question"><button className = "navbar-button">Ask an Expert</button></Link>
        <div className= "navbar-button" onClick = {this.logOut} >Log Out </div>
        <div className= "navbar-button" onClick = {this.goToProfile} >My Profile</div>

      </React.Fragment>
    )
  }
  goToProfile = () =>{
    if (this.props.isExpert){
      this.props.history.push(`/experts/${this.props.currentUser.id}`)
    }
    else{
      this.props.history.push(`/users/${this.props.currentUser.id}`)

    }
  }
  logOut = () =>{
    this.props.logout()
    this.props.history.push("/")
  }
}
const mapStateToProps = (state) =>{
  return {
    currentUser:state.userSession.currentUser,
    isExpert: state.userSession.expert
  }


}
export default connect(mapStateToProps, actions)(NavBarPostloginButtons)
