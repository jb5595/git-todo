import React from "react"
import UserProfileTopInfo from "../components/UserProfileComponents/UserProfileTopInfo"
import UserProfileQuestionsContainer from "./UserProfileQuestionsContainer"
import { connect } from "react-redux"
import * as actions from "../actions/userActions"

class UserProfile extends React.Component{

  componentDidMount(){
    let id = 1;

    this.props.loadUserProfile(id)
  }
  render(){
    return(
      <div>
        <UserProfileTopInfo userName = {this.props.user.user_name}
        email = {this.props.user.email} revenueRange = {this.props.user.revenue_range}
        sizeRange = {this.props.user.size_range} location = {this.props.user.location}/>
        <UserProfileQuestionsContainer/>
      </div>
    )
  }

}

const mapStateToProps = (state) =>{
  return {
          user: state.userProfile.userObject,
          profileLoading: state.userProfile.userLoading
        }
}


export default connect(mapStateToProps, actions)(UserProfile)
