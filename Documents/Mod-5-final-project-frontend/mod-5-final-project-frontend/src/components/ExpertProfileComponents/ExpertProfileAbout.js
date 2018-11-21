import React from "react"
import { GridLoader } from 'react-spinners';

class ExpertProfileAbout extends React.Component{
  render(){
    return(
      <div className = "profile-subinfo">
          <h5>Work Experience</h5>
          <div className= "work-experience-container">
            {this.props.workExperience ? this.renderWorkExperience() :  <GridLoader sizeUnit={"px"} size={50} color={'#123abc'} loading={this.props.workExperience}/>}
          </div>
          <h5>Education</h5>
          <div className= "work-experience-container">
            {this.props.educations ? this.renderEducation() :  <GridLoader sizeUnit={"px"} size={50} color={'#123abc'} loading={this.props.educations}/>}
          </div>
      </div>
    )
    }

    renderWorkExperience(){
      return this.props.workExperience.map(job =>{
      return(
        <div key={job.id} className = "offset-2 col-8">
            <h5 className = "job-title">{job.title}</h5>
            <div className = "company">{job.company}</div>
            <div className = "work-dates">{job.start_month} {job.start_year} - {job.end_month && job.end_year ? `${job.end_month} ${job.end_year}` : "Present"}</div>
            <div className = "location">{job.location}</div>
            <div className = "description">{job.description}</div>
        </div>
      )
    })
    }
    renderEducation(){
      return this.props.educations.map(education => {
        return(
          <div key={education.id} className = "offset-2 col-8">
              <h5 className = "job-title">{education.school}</h5>
              <div className = "company">{education.degree}, {education.field_of_strufy}</div>
              <div className = "work-dates">{education.start_year} - {education.end_year ? `${education.end_year}` : "Present"}</div>
              <div className = "description">{education.description}</div>
          </div>

        )
      })
    }
}


export default ExpertProfileAbout
