import React from 'react'

class QuestionPreview extends React.Component{

  render(){

    return(
    <div className = "question-preview">
      <h5 onClick ={this.handleClick}>
      <span className = "question-preview-header">{this.props.question}</span>
      </h5>
      <p>{this.props.details.slice(0,140)}...</p>
      {this.props.tags? this.props.tags.map(tag =><div key = {tag.id} className = "expertise-tag">{tag.name}</div>) : null}
    </div>
    )
  }
  handleClick = () =>{
    this.props.history.push(`/questions/${this.props.id}`)
  }
}

export default QuestionPreview
