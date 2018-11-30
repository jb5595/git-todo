
import React from 'react'

import AnswerUpvoteContainer from "../containers/AnswerUpvoteContainer"

class AnswerDisplay extends React.Component{
  render(){
    return(
      <div>
        <div className = "col-8 offset-2 question-preview">
        <div className = "row">
          <div>
            <p>{this.props.content}</p>
            <AnswerUpvoteContainer currentUser= {this.props.currentUser}
            jwt = {this.props.jwt} currentUserIsExpert = {this.props.currentUserIsExpert}
            answerId= {this.props.answerId} questionId = {this.props.questionId}
            upvotes = {this.props.upvotes}/>
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
