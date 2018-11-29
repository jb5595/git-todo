import React from 'react'

class AnswerForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      answer: {
        content: "",
        question_id: this.props.questionId,
        expert_id: this.props.expert_id
      }
    }
  }
  render(){
    return(
      <div className ="col-8 offset-2 answer-question-form">
        <h5>Your Answer</h5>
        <form>
          <textarea className = "form-control "value = {this.state.answer.content} onChange = {this.handleChange}/>
        </form>
      </div>
    )
  }
  handleChange = (e) =>{
    this.setState({
      answer:{
        ...this.state.answer,
        content: e.target.value
      }
    })
  }


}

export default AnswerForm
