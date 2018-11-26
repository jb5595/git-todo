import React from "react"
import QuestionDisplay from "../components/QuestionDisplay"
import * as actions from "../actions/questionShowPageActions"
import { connect } from "react-redux"
import AnswerContainer from "./AnswerContainer"

class QuestionShowPage extends React.Component{

  componentDidMount(){
    this.props.loadQuestion(this.props.id)
  }
  render(){
    return(
      <div>
         <QuestionDisplay
        id = {this.props.question.id}
        question = {this.props.question.question}
        details = {this.props.question.question_details}
        tags = {this.props.question.tags}/>
        <AnswerContainer
        history = {this.props.history}
        answers = {this.props.question.answers}/>

      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    question: state.questionShow.questionObject
  }
}

export default connect(mapStateToProps, actions)(QuestionShowPage)
