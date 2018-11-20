import React from "react"
import ContactInfo from "../components/ProfileComponents/contactInfo"
import ProfileTopInfo from "../components/ProfileComponents/profileTopInfo"
import AccountAnalyticsOverview from "../components/ProfileComponents/AccountAnalyticsOverview"
import ExpertiseInfo from "../components/ProfileComponents/expertiseInfo"
import ExpertProfileAbout from "../components/ProfileComponents/ExpertProfileAbout"
import ExpertProfileQA from "../components/ProfileComponents/ExpertProfileQ&A"
import ExpertProfileReviews from "../components/ProfileComponents/ExpertProfileReviews"
import { connect } from "react-redux"
import * as actions from "../actions/expertProfileActions"

class ExpertProfile extends React.Component{
  constructor(){
    super()
    this.state = {selectedSubPage: "About"}
  }
  componentDidMount(){
    this.props.loadProfile()
  }
  menuSelector = (e) =>{
    this.setState({
      selectedSubPage: e.target.innerText
    })
   }

  render(){
    return(
      <div>
        <img className = "banner-photo" alt = "banner" src = "https://via.placeholder.com/851x351?text=851x351+Banner%20+Photo"/>
        <div className = "container-fluid">
        <ProfileTopInfo/>
        <ContactInfo/>
        <AccountAnalyticsOverview/>
        <ExpertiseInfo/>
        <div className = "row profile-info-menu">
            <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "About" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
              About
            </div>
            <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "Reviews" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
              Reviews
            </div>
            <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "Q&A" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
              Q&A
            </div>
        </div>
        {this.renderSubInformation()}
        </div>
      </div>
    )
  }
  renderSubInformation(){
    switch (this.state.selectedSubPage) {
      case "Reviews":
        return <ExpertProfileReviews/>
      case "Q&A":
        return <ExpertProfileQA/>
      default:
        return <ExpertProfileAbout/>

    }
  }
}
const mapStateToProps = (state) =>{
  return {
          expertProfile: state.expertProfile.expertObject,
          profileLoading: state.expertProfile.profileLoading
        }
}

export default connect(mapStateToProps, actions)(ExpertProfile)
