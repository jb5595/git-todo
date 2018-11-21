const BASEUSERURL = "http://localhost:3000/users/"

export function loadUserProfile(userID){

  return (dispatch) => {
    dispatch( {type:"LOADING_USER"});
    return fetch(BASEUSERURL + userID).then(response => {
      return response.json()
    }).then(userObject => {
      dispatch({type: "FETCH_USER", userObject})
  })
  }
}
