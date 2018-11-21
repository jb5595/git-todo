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
            <span className = "vote-score">0</span>
            <IoMdArrowDropdownCircle className ="upvote-icon"/>
          </div>
          <div className = "col-11">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className = "offset-5 offset-md-8 row">
              <div className ="col-3">
                <img className = "profile-picture-thumbnail" alt = "profile" src = "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"/>
              </div>
              <div className = "expert-preview-details">
                <p>Full Name </p>
                <p>Headline</p>
                <p>Position @ Company </p>
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
