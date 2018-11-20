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
            {props.website}
          </div>
          <div className = "contact-header">
            Phone
          </div>
          <div className = "contact-info">
            {props.phone}
          </div>
          <div className = "contact-header">
            Email
          </div>
          <div className = "contact-info">
            {props.email}
          </div>
        </div>
        <div className = "col-4">
          <div className = "contact-header">
            Address
          </div>
          <div className = "contact-info">
            {props.address}
          </div>
          <div className = "contact-info">
            {props.city}, {props.state}
          </div>
          <div className = "contact-info">
            {props.zipcode}
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
