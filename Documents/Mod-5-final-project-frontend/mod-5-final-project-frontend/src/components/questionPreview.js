import React from 'react'

class QuestionPreview extends React.Component{

  render(){
    
    return(
    <div className = "question-preview">
      <h5 onClick ={this.handleClick}>
      <span className = "question-preview-header">{this.props.question}</span>
      </h5>
      <p>{this.props.details.slice(0,140)}...</p>
      <div className = "expertise-tag">Tag</div><div className = "expertise-tag">Tag</div>
    </div>
    )
  }
  handleClick = () =>{
    this.props.history.push(`/questions/${this.props.id}`)
  }
}

export default QuestionPreview
