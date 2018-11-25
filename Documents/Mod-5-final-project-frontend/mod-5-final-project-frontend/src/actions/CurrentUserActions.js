export function SetCurrentUser(currentUser, jwt){

  return (dispatch) => {
    return dispatch( {type:"SET_CURRENT_USER", currentUser, jwt});
  }
}
