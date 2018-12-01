
const BASEANSWERSURL = "http://localhost:3000/answers/"

export function loadUpvotes(answerId){
  return (dispatch) => {
    dispatch( {type:"LOADING_ANSWER_UPVOTES"});
    return fetch(BASEANSWERSURL + answerId + "/answer_upvotes").then(response => {
      return response.json()
    }).then(upvotesObject => {
      dispatch({type: "FETCH_ANSWER_UPVOTES", upvotesObject})
  })
  }
}
