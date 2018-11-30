import React from "react"
import QuestionDisplay from "../components/QuestionDisplay"
import * as actions from "../actions/questionShowPageActions"
import { connect } from "react-redux"
import AnswerContainer from "./AnswerContainer"
import AnswerForm from "../components/AnswerForm"
class QuestionShowPage extends React.Component{


  componentDidMount(){
    this.props.loadQuestion(this.props.id)
  }
  render(){
    this.reloadQuestionIfNeeded()
    return(
      <div>
         {!this.props.questionLoading ? <QuestionDisplay
        jwt = {this.props.jwt}
        currentUser = {this.props.currentUser}
        currentUserIsExpert ={this.props.CurrentUserIsExpert}
        id = {this.props.question.id}
        question = {this.props.question.question}
        details = {this.props.question.question_details}
        tags = {this.props.question.tags}
        upvotes = {this.props.question.question_upvotes}
        /> : null}
        <AnswerContainer
        history = {this.props.history}
        answers = {this.props.question.answers}/>
        {this.props.CurrentUserIsExpert ? <AnswerForm
            reloadQuestion = {this.reloadQuestionIfNeeded} jwt = {this.props.jwt}
           expertId = {this.props.currentUser.id} questionId = {this.props.question.id}/>: null}
      </div>
    )
  }
  reloadQuestionIfNeeded = (forceReload = false) =>{
    if (forceReload || parseInt(this.props.question.id) !== parseInt(this.props.id) ){
      this.props.loadQuestion(this.props.id)
    }
  }
}

const mapStateToProps = (state) =>{
  return{
    jwt:state.userSession.jwt,
    currentUser:state.userSession.currentUser,
    CurrentUserIsExpert: state.userSession.expert,
    question: state.questionShow.questionObject,
    questionLoading: state.questionShow.questionLoading
  }
}

export default connect(mapStateToProps, actions)(QuestionShowPage)
