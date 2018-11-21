import React from "react"
import QuestionDisplay from "../components/QuestionDisplay"
import AnswerDisplay from "../components/AnswerDisplay"
import * as actions from "../actions/questionShowPageActions"
import { connect } from "react-redux"
import {IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io"

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
        details = {this.props.question.question_details}/>
        <h5>Answers </h5>
        <AnswerDisplay/>
        <AnswerDisplay/>
        <AnswerDisplay/>
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
