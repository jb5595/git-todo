import React from "react"
import QuestionIndexFilters from "../components/QuestionIndexFilters"
import QuestionDisplayContainer from './QuestionDisplayContainer'

const QuestionsURL = "http://localhost:3000/questions/"

class QuestionIndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      questions: null
    }
  }
  componentDidMount(){
    fetch(QuestionsURL)
    .then(resp => resp.json())
    .then(data => this.setState({questions:data}))
  }
  render(){
    return(
      <div className = "questions-index-page-container col-8 offset-2">
        <QuestionIndexFilters/>
        {this.state.questions ? <QuestionDisplayContainer
          history = {this.props.history}
           questions = {this.state.questions}/> : null }
      </div>
    )
  }
}

export default QuestionIndexPage
