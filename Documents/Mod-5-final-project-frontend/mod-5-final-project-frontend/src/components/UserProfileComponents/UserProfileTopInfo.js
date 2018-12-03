import React from "react"
import { IoIosPeople } from "react-icons/io";
import { FaMoneyBillWave, FaQuestion, FaMapMarkedAlt, FaIndustry } from "react-icons/fa";


class UserProfileTopInfo extends React.Component{

  render(){
    return(
      <div className = "user-profile-top-info-container">
      <div className = "row">
        <div className = "user-profile-picture-container offset-2">
          <img className = "user-profile-picture" alt = "profile" src = "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"/>
        </div>
        <div className = "user-profile-header-info">
          <div className = "row">
            <div className = "profile-name" >
              <h4>{this.props.userName}</h4>
            </div>
          </div>
          <div className = "row">
            <div className = "profile-subtitle">
              <IoIosPeople/> {this.props.sizeRange} Employees
            </div>
          </div>
          <div className = "row">
            <div className = "profile-subtitle">
              <FaMapMarkedAlt/> {this.props.location}
            </div>
          </div>
          <div className = "row">
            <div className = "profile-subtitle">
              <FaIndustry/> Industries: tech, finance
            </div>
          </div>
          <div className = "row">
            <div className = "profile-subtitle">
              <FaQuestion/>{this.props.numberOfQuestions} Questions
            </div>
          </div>
        </div>

      </div>


      </div>
    )
  }
}

export default UserProfileTopInfo
