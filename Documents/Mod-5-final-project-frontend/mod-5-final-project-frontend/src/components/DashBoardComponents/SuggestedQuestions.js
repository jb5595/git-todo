import React from "react"
import QuestionDisplayContainer from "../../containers/QuestionDisplayContainer"

class SuggestedQuestions extends React.Component{
  render(){
    return(
      <div className = "suggested_questions">
        <h5>Suggested Questions</h5>
        <p>We suggest questions that match your expertise that can help you get the most exposure and inquiries.</p>
        <QuestionDisplayContainer history = {this.props.history} questions ={this.props.questions}/>
      </div>
    )
  }
}

export default SuggestedQuestions
