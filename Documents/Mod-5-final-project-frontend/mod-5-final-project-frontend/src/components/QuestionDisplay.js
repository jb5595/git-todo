import React from 'react'
import QuestionUpvoteContainer from "../containers/QuestionUpvoteContainer"
import {connect} from "react-redux"
import * as actions from "../actions/questionShowPageActions"
import {  FaUserAlt, FaIndustry } from "react-icons/fa";


class QuestionDisplay extends React.Component{

  render(){
    console.log(this.props.user)
    return(
      <div>
      <div>
        <div className = "col-8 offset-2 question-preview">
        <div className = "row">
        <div>
          <h5>Q: {this.props.question}</h5>
          <p>{this.props.details}</p>
          {this.props.questionLoading|| this.props.upvotesLoading || this.props.loadingCurrentUser ? null: <QuestionUpvoteContainer question_id = {this.props.id}/> }
          {this.props.user? <div><small className ="username-preview" onClick = {this.reRoutetoUserPage}><FaUserAlt/>{this.props.user.user_name}</small><small><FaIndustry/>   {this.props.user.industry}</small> </div> :null }
          <br/>
          {this.props.tags? this.props.tags.map(tag =><div key = {tag.id} className = "expertise-tag">{tag.name}</div>) : null}

        </div>
        </div>
        </div>
      </div>
      </div>
    )
  }
  reRoutetoUserPage = ()=>{
    this.props.history.push(`/users/${this.props.user.id}`)
  }
}
const mapStateToProps = (state) =>{
  return{
    questionLoading: state.questionShow.questionLoading,
    loadingCurrentUser: state.userSession.loadingCurrentUser,
    upvotesLoading: state.questionShow.upvotesLoading
  }
}

export default connect(mapStateToProps, actions)(QuestionDisplay)
