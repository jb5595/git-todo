import React from "react"

const ContactInfo = (props) =>{
  return(
    <React.Fragment>
    <h5 className = "profile-section-header" >Connect</h5>
    <div className = "contact-info-container row">
        <div className = "col-5 offset-2">
          <div className = "contact-header">
            Website
          </div>
          <div className = "contact-info">
            www.website.com
          </div>
          <div className = "contact-header">
            Phone
          </div>
          <div className = "contact-info">
            555-555-5555
          </div>
          <div className = "contact-header">
            Email
          </div>
          <div className = "contact-info">
            email@gmail.com
          </div>
        </div>
        <div className = "col-4">
          <div className = "contact-header">
            Address
          </div>
          <div className = "contact-info">
            1235 streetname
          </div>
          <div className = "contact-info">
            Washington, DC
          </div>
          <div className = "contact-info">
            22222
          </div>
          <div className = "contact-info">
            United States
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default ContactInfo
