import React from "react"
import ContactInfo from "../components/ProfileComponents/contactInfo"
import ProfileTopInfo from "../components/ProfileComponents/profileTopInfo"
import AccountAnalyticsOverview from "../components/ProfileComponents/AccountAnalyticsOverview"
import ExpertiseInfo from "../components/ProfileComponents/expertiseInfo"
import ExpertProfileAbout from "../components/ProfileComponents/ExpertProfileAbout"
import ExpertProfileQA from "../components/ProfileComponents/ExpertProfileQ&A"
import ExpertProfileReviews from "../components/ProfileComponents/ExpertProfileReviews"
import { GridLoader } from 'react-spinners';
import { connect } from "react-redux"
import * as actions from "../actions/expertProfileActions"

class ExpertProfile extends React.Component{
  constructor(){
    super()
    this.state = {selectedSubPage: "About"}
  }
  componentDidMount(){
    let id = 7;
    this.props.loadProfile(id)
  }
  menuSelector = (e) =>{
    this.setState({
      selectedSubPage: e.target.innerText
    })
   }

  render(){
    if (this.props.profileLoading){
      return (
        <div className = "loading-spinner offset-5">
        <GridLoader
          sizeUnit={"px"}
          size={50}
          color={'#123abc'}
          loading={this.state.profileLoading}
        />
      </div>
    )
    }
    return(
      <div>
        <img className = "banner-photo" alt = "banner" src = "https://via.placeholder.com/851x351?text=851x351+Banner%20+Photo"/>
        <div className = "container-fluid">
        <ProfileTopInfo fullName ={this.props.expert.full_name}
                        jobTitle = {this.props.expert.job_title}
                        company ={this.props.expert.company}
                        about = {this.props.expert.about}/>
        <ContactInfo address = {this.props.expert.address}
                     city  = {this.props.expert.city} state = {this.props.expert.state}
                     phone  = {this.props.expert.phone} email = {this.props.expert.email}
                     zipcode = {this.props.expert.zip_code} website  = {this.props.expert.website_url}/>
        <AccountAnalyticsOverview/>
        <ExpertiseInfo/>
        <div className = "row profile-info-menu">
            <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "Reviews" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
              Reviews
            </div>
            <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "About" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
              About
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
        return <ExpertProfileAbout educations = {this.props.expert.educations} workExperience = {this.props.expert.work_experiences}/>

    }
  }
}
const mapStateToProps = (state) =>{
  return {
          expert: state.expertProfile.expertObject,
          profileLoading: state.expertProfile.profileLoading
        }
}

export default connect(mapStateToProps, actions)(ExpertProfile)
