import React from "react"

class QuestionIndexFilters extends React.Component{

  render(){
    return(
      <div>
        <form>
          <div className="form-row">
            <div className="col-10">
              <input type="text" className="form-control" placeholder="City"/>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default QuestionIndexFilters
