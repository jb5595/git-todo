import React from "react"
import ContactInfo from "../components/ExpertProfileComponents/contactInfo"
import ProfileTopInfo from "../components/ExpertProfileComponents/profileTopInfo"
import AccountAnalyticsOverview from "../components/ExpertProfileComponents/AccountAnalyticsOverview"
import ExpertiseInfo from "../components/ExpertProfileComponents/expertiseInfo"
import ExpertProfileAbout from "../components/ExpertProfileComponents/ExpertProfileAbout"
import ExpertProfileQA from "../components/ExpertProfileComponents/ExpertProfileQ&A"
import ExpertProfileReviews from "../components/ExpertProfileComponents/ExpertProfileReviews"
import EditTopInfoModal from "../components/ExpertProfileComponents/editTopInfoModal"
import EditContactInfoModal from  "../components/ExpertProfileComponents/EditContactInfoModal"
import AddWorkExperienceModal from "../components/ExpertProfileComponents/AddWorkExperienceModal"
import EditWorkExperienceModal from "../components/ExpertProfileComponents/EditWorkExperienceModal"
import EditTagsModal from "../components/ExpertProfileComponents/EditTagsModal"
import { GridLoader } from 'react-spinners';
import { connect } from "react-redux"
import * as actions from "../actions/expertProfileActions"
import * as sessionActions from "../actions/CurrentUserActions"


const BaseExpertURL = "http://localhost:3000/experts/"
class ExpertProfile extends React.Component{
  constructor(props){
    super(props)
    let canEdit
    if (this.props.currentUser
      && this.props.currentUser.id == this.props.expert.id
      && this.props.CurrentUserIsExpert){
      canEdit = true
    }
    else{
      canEdit = false
    }
    this.state = {
      modal: null,
      selectedSubPage: "About",
      canEdit: true,
      workExperienceToEdit: null
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
        {this.state.modal === "topInfo" ?
        <EditTopInfoModal handleEdits = {this.handleEdits}
                          handleClose = {this.closeModal}
                          fullName ={this.props.expert.full_name}
                          jobTitle = {this.props.expert.job_title}
                          company ={this.props.expert.company}
                          about = {this.props.expert.about}
        /> : null}
        {this.state.modal === "contactInfo" ?
        <EditContactInfoModal address = {this.props.expert.address}
        city  = {this.props.expert.city} state = {this.props.expert.state}
        phone  = {this.props.expert.phone} email = {this.props.expert.email}
        zipcode = {this.props.expert.zip_code} website  = {this.props.expert.website_url}
        handleClose = {this.closeModal} handleEdits = {this.handleEdits}
        />:null}
        {this.state.modal === "tags" ?
        <EditTagsModal  handleEdits = {this.handleEdits} handleClose = {this.closeModal} tags = {this.props.expert.tags}/>:null
        }
        {this.state.modal === "addWorkExperience" ?
        <AddWorkExperienceModal addWorkExperience = {this.addWorkExperience} handleClose = {this.closeModal}/>: null
        }
        {this.state.modal === "editWorkExperience" ?
         <EditWorkExperienceModal handleEditWorkExperience = {this.handleEditWorkExperience}
                                  workExperience = {this.state.workExperienceToEdit}
                                  handleClose = {this.closeModal}/> :null}
        <img className = "banner-photo" alt = "banner" src = "https://via.placeholder.com/851x351?text=851x351+Banner%20+Photo"/>
        <div className = "container-fluid">
        <ProfileTopInfo handleEdit = {this.editTopInfo}
                        fullName ={this.props.expert.full_name}
                        jobTitle = {this.props.expert.job_title}
                        company ={this.props.expert.company}
                        about = {this.props.expert.about}
                        canEdit = {this.state.canEdit}/>
        <ContactInfo handleEdit = {this.editContactInfo}
                     address = {this.props.expert.address}
                     city  = {this.props.expert.city} state = {this.props.expert.state}
                     phone  = {this.props.expert.phone} email = {this.props.expert.email}
                     zipcode = {this.props.expert.zip_code} website  = {this.props.expert.website_url}/>
        {this.props.expert ? <AccountAnalyticsOverview topTags = {this.props.expert.top_tags} answeredQuestions = {this.props.expert.answered_questions}/>: null}
        <ExpertiseInfo handleEdit = {this.editTags} canEdit = {this.state.canEdit} tags = {this.props.expert.tags}/>
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
  .then(data =>{

    this.props.UpdateCurrentUser(data)
    this.props.history.push(`/experts/`)
    this.props.history.push(`/experts/${data.id}`)


  })

  }
  deleteWorkExperience = (workExperienceId) =>{
    fetch(BaseExpertURL + `${this.props.currentUser.id}/work_experiences/${workExperienceId}`,{
      method: "DELETE",
      headers: {
          Authorization: `Bearer ${this.props.jwt}`,
        }
      }
    ).then(resp => resp.json())
    .then(data =>{

    this.props.UpdateCurrentUser(data)
    this.props.history.push(`/experts/`)
    this.props.history.push(`/experts/${data.id}`)

    })


  }
  handleEditWorkExperience = (workExperience) => {
    fetch(BaseExpertURL + `${this.props.currentUser.id}/work_experiences/${workExperience.id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.props.jwt}`,
          Accept: "application/json"
        },
        body: JSON.stringify(workExperience)
      }
    ).then(resp => resp.json())
    .then(data =>{

    this.props.UpdateCurrentUser(data)
    this.props.history.push(`/experts/`)
    this.props.history.push(`/experts/${data.id}`)

    })

  }
  addWorkExperience = (workExperience) =>{

    fetch(BaseExpertURL + `${this.props.currentUser.id}/work_experiences`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.props.jwt}`,
          Accept: "application/json"
        },
        body: JSON.stringify(workExperience)
      }
  ).then(resp => resp.json())
  .then(data =>{

    this.props.UpdateCurrentUser(data)
    this.props.history.push(`/experts/`)
    this.props.history.push(`/experts/${data.id}`)

    })
  }
  // Controls for opening and closing Modals
  editTopInfo = (e) =>{
    this.setState({
      modal: "topInfo"
    })
  }
  editContactInfo = (e) =>{
    this.setState({
      modal: "contactInfo"
    })
  }
  editTags = (e)=>{
    this.setState({
      modal: "tags"
    })
  }

  openAddWorkExperienceModal = (e) => {
    this.setState({
      modal: "addWorkExperience"
    })
  }
  openEditWorkExperiencesModal = (work_experience) =>{
    this.setState({
      modal: "editWorkExperience",
      workExperienceToEdit: work_experience

    })
  }


  closeModal = (e) =>{
    if (e.target.id === "closeModal"){
      this.setState({
        modal: null,
        workExperienceToEdit: null
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
        return <ExpertProfileAbout canEdit = {this.state.canEdit}
                                  editWorkExperience = {this.openEditWorkExperiencesModal}
                                  addWorkExperience = {this.openAddWorkExperienceModal}
                                  educations = {this.props.expert.educations}
                                  workExperience = {this.props.expert.work_experiences}
                                  deleteWorkExperience = {this.deleteWorkExperience}/>

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

export default connect(mapStateToProps, {...actions, ...sessionActions })(ExpertProfile)
