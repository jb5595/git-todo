import React from 'react'
import {IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io"

class AnswerDisplay extends React.Component{
  render(){
    return(
      <div>
        <div className = "col-8 offset-2 question-preview">
        <div className = "row">
          <div className = "col-1 vote-container">
            <IoMdArrowDropupCircle className ="upvote-icon"/>
            <span className = "vote-score">{this.props.upvotes}</span>
            <IoMdArrowDropdownCircle className ="upvote-icon"/>
          </div>
          <div className = "col-11">
            <p>{this.props.content}</p>
            <div className = "offset-0 offset-lg-6 row">
              <div className ="col-1 col-lg-2">
                <img className = "profile-picture-thumbnail" alt = "profile" src = "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"/>
              </div>
              <div className = "expert-preview-details col-9">
                <p onClick = {() => this.props.handleClick(this.props.expert.id)}>
                  <span className = "expert-preview-name"><b>{this.props.expert.full_name}</b></span>
                </p>
                <p className = "expert-preview-tagline">{this.props.expert.about}</p>
                <p className = "expert-preview-tagline">{this.props.expert.job_title} @ {this.props.expert.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default AnswerDisplay
