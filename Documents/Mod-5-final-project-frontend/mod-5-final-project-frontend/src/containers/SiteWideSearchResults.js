import React from 'react'

const QuestionsURL = "http://localhost:3000/questions"
const ExpertsURL = "http://localhost:3000/experts"

class SiteWideSearchResults extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      questions: [],
      displayQuestions: [],
      experts: [],
      displayExperts: [],
      searchTerm: this.props.searchTerm,
      displayOption: ""
    }
  }

  componentDidMount(){
    fetch(QuestionsURL)
    .then(resp => resp.json())
    .then(data => this.setState({
      questions: data,
      displayQuestions: data
    }))
    fetch(ExpertsURL)
    .then(resp => resp.json())
    .then(data => this.setState({
      experts: data,
      displayExperts: data
    }))
    }

  render(){
    return(
      <div>
        <div>
        <br/>
          <form className = "col-8 offset-2" onSubmit = {this.props.handleSubmit}>
                <input onChange ={this.props.handleChange} value = {this.state.searchTerm} type="text" className="form-control" placeholder="Search by keyword or Tag"/>
          </form>
        </div>
        <br/>
        <div className = "row">
        <div className = "feed-top-bar row">
          <div className = "top-bar-item">
            Questions
          </div>
          <div onClick = {this.displayBookmarks} className = "top-bar-item">
            Experts
          </div>

        </div>
        </div>
    </div>
    )
  }

}

export default SiteWideSearchResults
