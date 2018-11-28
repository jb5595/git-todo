import React from "react"
import ContactInfo from "../components/ExpertProfileComponents/contactInfo"
import ProfileTopInfo from "../components/ExpertProfileComponents/profileTopInfo"
import AccountAnalyticsOverview from "../components/ExpertProfileComponents/AccountAnalyticsOverview"
import ExpertiseInfo from "../components/ExpertProfileComponents/expertiseInfo"
import ExpertProfileAbout from "../components/ExpertProfileComponents/ExpertProfileAbout"
import ExpertProfileQA from "../components/ExpertProfileComponents/ExpertProfileQ&A"
import ExpertProfileReviews from "../components/ExpertProfileComponents/ExpertProfileReviews"
import EditTopInfoModal from "../components/ExpertProfileComponents/editTopInfoModal"
import { GridLoader } from 'react-spinners';
import { connect } from "react-redux"
import { FaEdit } from "react-icons/fa";
import * as actions from "../actions/expertProfileActions"


const BaseExpertURL = "http://localhost:3000/experts/"

class ExpertProfile extends React.Component{
  constructor(props){
    super(props)
    let canEdit
    console.log(this.props.currentUser)
    console.log(this.props.expert)
    if (this.props.currentUser
      && this.props.currentUser.id == this.props.expert.id
      && this.props.CurrentUserIsExpert){
      canEdit = true
    }
    else{
      canEdit = false
    }
    this.state = {
      editing: null,
      selectedSubPage: "About",
      canEdit: true
    }
  }
  componentDidMount(){
    this.props.loadProfile(this.props.id)
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
        {this.state.editing === "topInfo" ?
        <EditTopInfoModal handleEdits = {this.handleEdits}
                          handleClose = {this.closeModal}
                          fullName ={this.props.expert.full_name}
                          jobTitle = {this.props.expert.job_title}
                          company ={this.props.expert.company}
                          about = {this.props.expert.about}
        /> : null}
        <img className = "banner-photo" alt = "banner" src = "https://via.placeholder.com/851x351?text=851x351+Banner%20+Photo"/>
        <div className = "container-fluid">
        <ProfileTopInfo handleEdit = {this.editTopInfo}
                        fullName ={this.props.expert.full_name}
                        jobTitle = {this.props.expert.job_title}
                        company ={this.props.expert.company}
                        about = {this.props.expert.about}
                        canEdit = {this.state.canEdit}/>
        <ContactInfo address = {this.props.expert.address}
                     city  = {this.props.expert.city} state = {this.props.expert.state}
                     phone  = {this.props.expert.phone} email = {this.props.expert.email}
                     zipcode = {this.props.expert.zip_code} website  = {this.props.expert.website_url}/>
        {this.props.expert ? <AccountAnalyticsOverview topTags = {this.props.expert.top_tags} answeredQuestions = {this.props.expert.answered_questions}/>: null}
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
  handleEdits =(edits) =>{
    debugger
    fetch(BaseExpertURL + this.props.currentUser.id,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.props.jwt}`,
          Accept: "application/json"
        },
        body: JSON.stringify(edits)
      }
  ).then(resp => resp.json())
  .then(data => console.log(data))

  }
  // Controls for opening and closing Modals
  editTopInfo = (e) =>{
    this.setState({
      editing: "topInfo"
    })
  }
  closeModal = (e) =>{
    if (e.target.id === "closeModal"){
      this.setState({
        editing: null
      })
    }
  }
  renderSubInformation(){
    switch (this.state.selectedSubPage) {
      case "Reviews":
        return <ExpertProfileReviews/>
      case "Q&A":
        return <ExpertProfileQA history = {this.props.history} questions = {this.props.expert.answered_questions}/>
      default:
        return <ExpertProfileAbout educations = {this.props.expert.educations} workExperience = {this.props.expert.work_experiences}/>

    }
  }
}
const mapStateToProps = (state) =>{
  return {
          jwt:state.userSession.jwt,
          currentUser:state.userSession.currentUser,
          CurrentUserIsExpert: state.userSession.expert,
          expert: state.expertProfile.expertObject,
          profileLoading: state.expertProfile.profileLoading
        }
}

export default connect(mapStateToProps, actions)(ExpertProfile)
