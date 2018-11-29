import React from "react"
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";


class ExpertPreview extends React.Component{

  render(){
    return(
      <div className = "expert-index-preview">
      <div className = "row ">

        <div className = "profile-picture-container ">
          <img className = "index-profile-picture" alt = "profile" src = "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"/>
        </div>
        <div className = "profile-header-info">
          <div className = "row">
            <div className = "">
              <span className = "rating"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> From X Reviews
            </div>
          </div>
          <div className = "row">
            <div className = "profile-name" >
              <Link to ={`/experts/${this.props.expert.id}`}><h4>{this.props.expert.full_name}</h4></Link>
            </div>
          </div>
          <div className = "row">
            <div className = "profile-subtitle">
              {this.props.expert.job_title} @ {this.props.expert.company}
            </div>
          </div>
        </div>
      </div>
      <div className = "row">
        <div className = "top-tags-preview">
        {this.props.expert.top_tags.length !== 0 ? <div>Top Tags</div> : null}
        {this.props.expert.top_tags ? this.props.expert.top_tags.map(tag =>
          <div className = "expertise-tag" key = {tag.id}>{tag.name}</div>) : null}
        </div>
      </div>
      <div className = "row center-text">
      <div className = "offset-3 col-7">
        {this.props.expert.about}
      </div>
      <br/><br/>
      </div>
     </div>
    )
  }
}

export default ExpertPreview