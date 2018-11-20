import React from "react"
import { FaStar } from "react-icons/fa";

const ProfileTopInfo = (props) =>{
  return(
    <React.Fragment>
    <div className = "row">
      <div className = "profile-picture-container offset-2">
        <img className = "profile-picture" alt = "profile" src = "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"/>
      </div>
      <div className = "profile-header-info">
        <div className = "row">
          <div className = "">
            <span className = "rating"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> From X Reviews
          </div>
        </div>
        <div className = "row">
          <div className = "profile-name" >
            <h4>Full Name</h4>
          </div>
        </div>
        <div className = "row">
          <div className = "profile-subtitle">
            Position @ Company
          </div>
        </div>
      </div>
    </div>

    </React.Fragment>
  )
}


export default ProfileTopInfo
