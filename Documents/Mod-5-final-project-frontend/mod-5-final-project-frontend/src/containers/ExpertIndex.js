
import React from "react"
const ExpertsURL = "http://localhost:3000/experts/"

class ExpertIndex extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      experts: null
    }
  }
  componentDidMount(){
    fetch(ExpertsURL)
    .then(resp => resp.json())
    .then(data => this.setState({experts:data}))
  }
  render(){
    return(
      <div>
        This is the Expert Index Page
      </div>
    )


  }
}

export default ExpertIndex
