import React from "react"
import { connect } from "react-redux"
import DashboardTopInfo from "../components/DashBoardComponents/DashboardTopInfo"
import ExpertProfileReviews from "../components/ExpertProfileComponents/ExpertProfileReviews"
import QuestionDisplayContainer from "./QuestionDisplayContainer"
import SuggestedQuestions from "../components/DashBoardComponents/SuggestedQuestions"


const MatchingQuestionsURL = "http://localhost:3000/experts/suggested_questions/"

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedSubPage: "Your Answers",
      suggested_questions: null,
    }

  }
  componentDidMount(){
    fetch(MatchingQuestionsURL + this.props.expert_id)
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        suggested_questions: data
      })
    })
  }


  render(){
    return(
      <div>
        <div className = "col-10 offset-1 ">
          <br/><br/>
          {this.props.currentUser ? <DashboardTopInfo user={this.props.currentUser}/> :null}
          <div className = "row dashboard-info-menu">
              <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "Your Answers" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
                Your Answers
              </div>
              <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "Q&A" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
                Q&A
              </div>
              <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "Analytics" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
                Analytics
              </div>
              <div onClick = {this.menuSelector} className = {this.state.selectedSubPage === "Your Reviews" ? "profile-menu-option active-menu-option":"profile-menu-option"}>
                Your Reviews
              </div>
          </div>
        </div>
        {this.props.currentUser ?this.renderSubInformation() :null}
      </div>
    )
  }
  renderSubInformation(){
    switch (this.state.selectedSubPage) {

      case "Your Answers":
       return <div className = "col-10 offset-1"><QuestionDisplayContainer history = {this.props.history} questions ={this.props.currentUser.answered_questions}/></div>
      case "Q&A":
        if (this.state.suggested_questions){
          return <div className = "col-10 offset-1"><SuggestedQuestions history = {this.props.history} questions ={this.state.suggested_questions}/></div>
        }
        else{
          return null
        }
      case "Your Reviews":
      return <div className = "col-10 offset-1 "><ExpertProfileReviews history = {this.props.history}
      expert ={this.props.currentUser} expert_id = {this.props.currentUser.id}/> </div>

      default:

    }
}
  menuSelector = (e) =>{
    this.setState({
      selectedSubPage: e.target.innerText
    })
   }
}

const mapStateToProps = (state) =>{

  return {
          jwt:state.userSession.jwt,
          userLoading: state.userSession.loadingCurrentUser,
          currentUser:state.userSession.currentUser,
        }
      }

export default connect(mapStateToProps)(Dashboard)
