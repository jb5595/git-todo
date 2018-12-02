import React from "react"
import {IoIosStar, IoIosStarOutline } from "react-icons/io";

class ReviewDisplay extends React.Component{
  render(){
    return(
      <div>
        <div className = "review-score">
          {this.renderRating()}
        </div>
        <div>
          <b>{this.props.review.title}</b> <br/>
          <p>{this.props.review.details}</p>
          <small className ="review-username">{this.props.review.author_username}</small>

        </div>
      </div>
    )
  }
  renderRating(){
    let stars = []
    for(let i = 0; i < this.props.review.score; i++){
      stars.push(<IoIosStar/>)
    }
    for(let i = this.props.review.score; i < 5; i++){
      stars.push(<IoIosStarOutline/>)
    }
    return stars
  }
}

export default ReviewDisplay
