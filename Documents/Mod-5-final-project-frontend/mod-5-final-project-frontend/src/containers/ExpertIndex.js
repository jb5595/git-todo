
import React from "react"
import ExpertPreviewContainer from "./ExpertPreviewContainer"
import ExpertIndexFilters from "../components/ExpertIndexFilters"
const ExpertsURL = "http://localhost:3000/experts/"

class ExpertIndex extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      experts: [],
      filterText: "",
      displayExperts: []
    }
  }
  componentDidMount(){
    fetch(ExpertsURL)
    .then(resp => resp.json())
    .then(data => this.setState(
      {experts:data,
      displayExperts: data
      }))
  }
  handleFilterTextChange = (e) =>{
    this.setState({
      filterText: e.target.value
    })
  }
  filterSearchResults = (e) =>{
    e.preventDefault()
    let searchTerm = this.state.filterText.toLowerCase()
    let displayExperts = this.state.experts.filter(expert =>
      this.fullNameIncludeSearchTerm(expert,searchTerm)||
      this.jobTitleIncludeSearchTerm(expert, searchTerm)||
      this.aboutIncludesSearchTerm(expert, searchTerm)||
      this.companyIncludeSearchTerm(expert, searchTerm))

    this.setState({
      displayExperts: displayExperts,
      filterText: ""
    })
  }
  fullNameIncludeSearchTerm(expert, searchTerm){
    if (expert.full_name){
      if(expert.full_name.toLowerCase().includes(searchTerm)){
        return true
      }
    }
    return false
  }
  companyIncludeSearchTerm(expert, searchTerm){
    if (expert.company){
      if(expert.company.toLowerCase().includes(searchTerm)){
        return true
      }
    }
    return false
  }
  jobTitleIncludeSearchTerm(expert, searchTerm){
    if (expert.job_title){
      if(expert.job_title.toLowerCase().includes(searchTerm)){
        return true
      }
    }
    return false
  }

  aboutIncludesSearchTerm(expert,searchTerm){
    if (expert.about){
      if(expert.about.toLowerCase().includes(searchTerm)){
        return true
      }
    }
    return false
  }
  render(){
    return(
      <div className = "col-8 offset-2">
        <ExpertIndexFilters handleSubmit = {this.filterSearchResults} handleChange = {this.handleFilterTextChange} filterText = {this.state.filterText}/>
        {this.state.displayExperts.length !== 0 ? <ExpertPreviewContainer experts = {this.state.displayExperts}/> : <div><br/><br/>There Doesn't Appear to Be Anything Here. Try a different search term</div>}
      </div>
    )
  }
}

export default ExpertIndex