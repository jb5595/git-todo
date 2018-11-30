export function SetCurrentUser(currentUser, jwt){

  return (dispatch) => {
    return dispatch( {type:"SET_CURRENT_USER", currentUser, jwt});
  }

}

export function SetCurrentExpert(currentUser, jwt){
  return (dispatch) => {
    return dispatch( {type:"SET_CURRENT_EXPERT", currentUser, jwt});
  }

}

export function UpdateCurrentUser(currentUser){

  return (dispatch) => {
    return dispatch( {type:"UPDATE_CURRENT_USER", currentUser});
  }

}

export function logout(){

  return (dispatch) => {
    return dispatch( {type:"LOGOUT"})
  }

}
