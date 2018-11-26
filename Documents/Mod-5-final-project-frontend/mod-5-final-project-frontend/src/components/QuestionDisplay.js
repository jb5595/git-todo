import React from 'react'
import {IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io"

class QuestionDisplay extends React.Component{
  render(){
    return(
      <div>
      <div>
        <div className = "col-8 offset-2 question-preview">
        <div className = "row">
        <div className = "col-1 vote-container">
        <IoMdArrowDropupCircle className ="upvote-icon"/>
        <span className = "vote-score">0</span>
         <IoMdArrowDropdownCircle className ="upvote-icon"/>
        </div>
        <div className = "col-11">
          <h5>Q: {this.props.question}</h5>
          <p>{this.props.details}</p>
          {this.props.tags? this.props.tags.map(tag =><div key = {tag.id} className = "expertise-tag">{tag.name}</div>) : null}

        </div>
        </div>
        </div>
      </div>
      </div>
    )
  }
}

export default QuestionDisplay
