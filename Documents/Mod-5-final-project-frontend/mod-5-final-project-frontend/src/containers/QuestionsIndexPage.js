import React from "react"
import QuestionIndexFilters from "../components/QuestionIndexFilters"
import QuestionDisplayContainer from './QuestionDisplayContainer'
import { Link } from "react-router-dom"
const QuestionsURL = "http://localhost:3000/questions/"

class QuestionIndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      questions: [],
      displayQuestions: [],
      filterText:""
    }
  }
  componentDidMount(){
    fetch(QuestionsURL)
    .then(resp => resp.json())
    .then(data => this.setState(
      {questions:data,
      displayQuestions: data}
    ))
  }
  handleFilterTextChange = (e) =>{
    this.setState({
      filterText: e.target.value
    })
  }
  tagsIncludesSearchTerm = (question, searchTerm) =>{

    if (question.tags.some(tag => tag.name.toLowerCase().includes(searchTerm))){
      return true
    }
    else {
      return false
    }
  }
  filterSearchResults = (e) =>{
    e.preventDefault()
    let searchTerm = this.state.filterText.toLowerCase()
    let displayQuestions = this.state.questions.filter(question =>
      question.question_details.toLowerCase().includes(searchTerm)|| this.tagsIncludesSearchTerm(question, searchTerm) )

    this.setState({
      displayQuestions: displayQuestions,
      filterText: ""
    })

  }
  render(){

    return(
      <div className = "questions-index-page-container col-8 offset-2">
        <br/><br/>
        <QuestionIndexFilters handleSubmit={this.filterSearchResults} handleChange = {this.handleFilterTextChange} filterText = {this.state.filterText}/>
        {this.state.displayQuestions.length === 0 ?
          <div><br/><br/>There Doesn't Appear to Be Anything Here. Try a different search term or
           <Link to = "/post/question"> posting a question of your own </Link></div>  :
           <QuestionDisplayContainer
          history = {this.props.history}
           questions = {this.state.displayQuestions}/>
          }
      </div>
    )
  }
}

export default QuestionIndexPage
