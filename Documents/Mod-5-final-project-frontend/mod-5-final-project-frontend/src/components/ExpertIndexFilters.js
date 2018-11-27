import React from "react"

class ExpertIndexFilters extends React.Component{

  render(){
    return(
      <div>
      <br/><br/>
        <form onSubmit = {this.props.handleSubmit}>
          <div className="row">
            <div className="col-7">
              <input onChange ={this.props.handleChange} value = {this.props.filterText} type="text" className="form-control" placeholder="Search by keyword"/>
            </div>
            <div className = "filter-buttons">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Most Recent</button>
                <button type="button" className="btn btn-secondary">Votes</button>
              </div>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default ExpertIndexFilters
