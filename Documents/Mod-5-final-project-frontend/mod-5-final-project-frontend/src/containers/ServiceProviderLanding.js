import React from "react"
import { Link } from 'react-router-dom';

class ServiceProviderLanding extends React.Component{
  render(){
    return(
      <div className = "home-page">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Establish your brand and manage your online reputation</h1>
            <Link to = "/create_expert_profile"><button className = "btn btn-primary">Create Your Account</button></Link>

          </div>
        </div>
        <div className = "grey-top-bar">
        </div>
        <div className = "about-subsection">
        <div className = "row">
          <div className = "offset-3" >
            Get your company in front of all of users in 20 minutes or less and start growing your client-base.

            <br/><br/>
            <br/><br/><br/>

          </div>
        </div>

        </div>
      </div>
    )
  }
}

export default ServiceProviderLanding
