import React from 'react'
import QuestionUpvoteContainer from "../containers/QuestionUpvoteContainer"
class QuestionDisplay extends React.Component{
  render(){
    return(
      <div>
      <div>
        <div className = "col-8 offset-2 question-preview">
        <div className = "row">
        <div>
          <h5>Q: {this.props.question}</h5>
          <p>{this.props.details}</p>
          <QuestionUpvoteContainer question_id = {this.props.id}  />
          <br/>
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
