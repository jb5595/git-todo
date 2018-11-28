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

export function logout(){

  return (dispatch) => {
    return dispatch( {type:"LOGOUT"})
  }

}
