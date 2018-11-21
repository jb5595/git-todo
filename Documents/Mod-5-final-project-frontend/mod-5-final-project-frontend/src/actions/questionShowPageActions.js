
const BASEQUESTIONSURL = "http://localhost:3000/questions/"

export function loadQuestion(quesitonID){

  return (dispatch) => {
    dispatch( {type:"LOADING_QUESTION"});
    return fetch(BASEQUESTIONSURL + quesitonID).then(response => {
      return response.json()
    }).then(questionObject => {
      dispatch({type: "FETCH_QUESTION", questionObject})
  })
  }
}
