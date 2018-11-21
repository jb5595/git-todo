import React from "react"

const AccountAnalyticsOverview = (props) =>{
  return(
    <React.Fragment>
      <h5 className = "profile-section-header" >BizHub Overview</h5>
      <div className = "bizhub-info-container row">
        <div className = "offset-md-2 offset-1 col-10 col-md-2 ">
          <div className = "bizhub-overview-header">
            Expert Answers:
          </div>
          <div className = "bizhub-overview-info">
            100
          </div>
        </div>
        <div className= "col-10 offset-md-0 offset-1 col-md-2 ">
          <div className = "bizhub-overview-header">
            Top Expertise:
          </div>
          <div className = "bizhub-overview-info">
            Legal, Business Law, Corporate Structure
          </div>
        </div>
        <div className= "col-10 offset-md-0 offset-1 col-md-2">
          <div className = "bizhub-overview-header">
            Top Tags:
          </div>
          <div className = "bizhub-overview-info">
            Funding, Mediation, Employment
          </div>
        </div>
        <div className= "col-10 offset-md-0 offset-1 col-md-2 ">
          <div className = "bizhub-overview-header">
            Upvotes:
          </div>
          <div className = "bizhub-overview-info">
            100
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default AccountAnalyticsOverview
