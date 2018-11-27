
import React from "react"
import { MdQuestionAnswer } from "react-icons/md";


const QuestionsSearchPreviewURL = "http://localhost:3000/questions/searchPreview/"
const ExpertsSearchPreviewURL = "http://localhost:3000/experts/searchPreview/"

class NavBarSearch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchTerm: "",
      qaResults:[],
      expertResults: [],

    }
  }
  handleChange = (e) =>{
    this.setState({
      searchTerm: e.target.value
    })
  if (e.target.value !== ""){
    fetch(QuestionsSearchPreviewURL + e.target.value)
    .then(resp => resp.json())
    .then(data => this.setState({qaResults: data}))
    fetch(ExpertsSearchPreviewURL + e.target.value)
    .then(resp => resp.json())
    .then(data => this.setState({expertResults: data}))
    }
    else {
      this.setState({
        qaResults: [],
        expertResults: []
      })
    }
  }
  render(){

    return(
      <div className="col-6">
      <form>
        <input onChange ={this.handleChange} name ="searchTerm"
        value = {this.state.searchTerm} className="form-control"
         type="search" placeholder="Search BizHub..." />
        <div className = "navbar-search-results-preview-container">
          {this.state.quaResults || this.state.qaResults.length === 0 ? null :  this.renderQaResults()}
          {!this.state.expertResults || this.state.expertResults.length === 0 ? null :  this.renderExpertResults()}
        </div>
      </form>
    </div>
    )
  }

  renderQaResults(){
    return(
      <React.Fragment>
        <div className = "nav-bar-search-result-title row">
          <div>
            Q&A
          </div>
          <div className = "offset-lg-9 col-lg-2 offset-6">
            See All
          </div>
        </div>
        {this.state.qaResults.map(question =>
          <div key = {question.id} className = "nav-bar-search-result">
          <MdQuestionAnswer/><span className = "search-result-link"
          data-id = {question.id} onClick = {this.handleQuestionReRoute}>{question.question}</span></div>)}
      </React.Fragment>
    )
  }
  renderExpertResults(){
    return(
      <React.Fragment>
        <div className = "nav-bar-search-result-title row">
          <div>
            Experts
          </div>
          <div className = "offset-lg-9 col-lg-2 offset-5">
            See All
          </div>
        </div>
        {this.state.expertResults.map(expert =>
          <div key = {expert.id} className = "nav-bar-search-result">
          <div className = "row expert-search-result">
          <img className = "search-picture-thumbnail" alt = "profile" src = "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"/>
          <div className = "col-6">
            <div className = "col-12">
              <b><span  data-id = {expert.id} className = "search-result-link"
               onClick = {this.handleExpertReRoute}>{expert.full_name}</span></b>
            </div>
            <div className = "col-12">
            <small> Job Title @ Company </small>
            </div>
          </div>
          </div>
          </div>)
        }
      </React.Fragment>
    )
  }
handleExpertReRoute = (e) => {
  this.setState({
    qaResults: [],
    expertResults: [],
    searchTerm: ""
  })
  this.props.history.push(`/experts/${e.target.dataset.id}`)
}

  handleQuestionReRoute = (e) =>{
    this.setState({
      qaResults: [],
      expertResults: [],
      searchTerm: ""
    })
    this.props.history.push(`/questions/${e.target.dataset.id}`)
  }
}

export default NavBarSearch
