import React from "react"
import AnswerDisplay from "../components/AnswerDisplay"

class AnswerContainer extends React.Component{
  render(){
    return(
      <div className = "answer-container">
        <h5>Answers</h5>
        {this.props.answers ? this.renderAnswers() : null}
      </div>
    )
  }
  renderAnswers(){
    return this.props.answers.map(answer =>
      <AnswerDisplay key = {answer.id} content = {answer.content}
      upvotes = {answer.upvotes} expert = {answer.expert}
      handleClick = {this.reRouteToExpertPage}/>)

  }
  reRouteToExpertPage = (expertId) =>{
    this.props.history.push(`/experts/${expertId}`)
  }
}

export default AnswerContainer
