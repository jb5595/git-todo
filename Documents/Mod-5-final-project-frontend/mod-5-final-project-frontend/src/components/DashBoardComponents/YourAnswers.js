import React from "react"
import QuestionDisplayContainer from "../../containers/QuestionDisplayContainer"

class YourAnswers extends React.Component{

  render(){
    return(
      <div>
        <div className = "analytics">
        <h4>Your Answers</h4>
          <div className = "profile_views ">
            <p>Get more profile views by answering questions.</p>
            <br/>
            <div className = "row offset-1">
              <div className = "analytics-header">
                <div>
                  <b>Total Answers</b>
                </div>
                <div>
                  {this.props.answers_overview.total_answers}
                </div>
              </div>
              <div className = "analytics-header">
                <div>
                  <b>Answers This Month</b>
                </div>
                <div>
                {this.props.answers_overview.answers_this_month}
                </div>
              </div>
              <div className = "analytics-header">
                <div>
                  <b>Answers Last Month</b>
                </div>
                <div>
                {this.props.answers_overview.answers_last_month}
                </div>
              </div>
            </div>
            <div className = "dashboard-question-preview">
            <QuestionDisplayContainer history = {this.props.history} questions ={this.props.questions}/>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default YourAnswers
