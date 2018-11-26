import React from "react"
import QuestionPreview from "../components/questionPreview"

class QuestionDisplayContainer extends React.Component {

  render(){
    return(
      <div>
        {this.props.questions.map(question => <QuestionPreview
        key = {question.id}
        id = {question.id}
        history = {this.props.history}
        question = {question.question}
        details = {question.question_details}
        tags = {question.tags} /> )  }
      </div>

    )
  }
}
export default QuestionDisplayContainer
