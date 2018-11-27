import React from "react"
import ExpertPreview from "../components/ExpertPreview"

class ExpertPreviewContainer extends React.Component {
  render(){
    return(
      <div className = "expert-index-preview-container">
        {this.props.experts.map(expert =>
          <ExpertPreview expert= {expert}/>
        )}
      </div>
    )
  }
}

export default ExpertPreviewContainer
