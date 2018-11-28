import React from "react"

import { FaEdit } from "react-icons/fa";


class EditTopInfoModal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      full_name: this.props.fullName,
      job_title: this.props.jobTitle,
      company: this.props.company,
      about: this.props.about
    }
  }
  render(){
    return(
      <div onClick = {this.props.handleClose} id = "closeModal"  className = "modal">
      <div className="modal-content" >
        <div className="modal-header">
          <h4>Edit Intro</h4>
        </div>
        <div className="modal-body">
        <form onSubmit = {this.handleSubmit}>
        <img className = "edit-banner-photo-preview" alt = "banner" src = "https://via.placeholder.com/851x351?text=851x351+Banner%20+Photo"/>
          <div className = "edit-cover-photo-button"> <FaEdit/> </div>
          <img className = "profile-picture-edit-preview" alt = "profile" src = "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"/>
          <div className = "edit-profile-photo-button"> <FaEdit/> </div>
          <br/><br/>
          <div className = "edit-top-info-text-inputs">
            <div className="form-group ">
              <label htmlFor="full_name">Full Name</label>
              <input onChange ={this.handleInputChange} type="text" className="form-control" name = "full_name" value = {this.state.full_name} placeholder="Enter Your Full Name"/>
            </div>
            <div className = "row">
              <div className="form-group col-6">
                <label htmlFor="job_title">Job Title</label>
                <input onChange ={this.handleInputChange} type="text" className="form-control" name = "job_title" value = {this.state.job_title} placeholder="Current Job Title"/>
              </div>
              <div className="form-group col-6">
                <label htmlFor="company">Company</label>
                <input onChange ={this.handleInputChange} type="text" className="form-control" name = "company" value = {this.state.company} placeholder="Company Name"/>
              </div>
            </div>
            <div className="form-group ">
              <label htmlFor="about">Headline</label>
              <textarea onChange ={this.handleInputChange} type="text" className="form-control" name = "about" value = {this.state.about} placeholder="Enter Your Headline"/>
            </div>
            <button className = "btn btn-primary">Save Changes</button>
            <br/><br/>
          </div>
          </form>
        </div>
      </div>

      </div>
    )
  }
  handleInputChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.handleEdits(this.state)
  }


}

export default EditTopInfoModal
