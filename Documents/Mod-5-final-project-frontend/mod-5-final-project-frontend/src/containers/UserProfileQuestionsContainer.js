import React from "react"
import { connect } from "react-redux"
import * as actions from "../actions/userActions"
import { GridLoader } from 'react-spinners';
import QuestionPreview from "../components/questionPreview"

class UserProfileQuestionsContainer extends React.Component{
  componentDidMount(){
    this.props.loadUserQuestions(this.props.userID)


  }
  render(){
    return(
      <div className = "questions-container">
        <h5>Questions</h5>
        <div className = "col-8 offset-2">
        {!this.props.questionsLoading ? this.renderQuestions():<div style = {{marginLeft:"45vw"}}><GridLoader sizeUnit={"px"} size={25} color={'#123abc'} loading={true}/></div>}
        </div>
      </div>
    )
  }
  renderQuestions(){
    return this.props.questions.map(question =>
       <QuestionPreview key ={question.id} question = {question.question}
        details = {question.question_details} history = {this.props.history}
         id = {question.id}/>)
  }
}
const mapStateToProps = (state) =>{
  return {
    questions:state.userProfile.userQuestions,
    questionsLoading: state.userProfile.questionsLoading
  }
}

export default connect(mapStateToProps, actions )(UserProfileQuestionsContainer)
