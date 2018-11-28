export default function manageCurrentUser(state = { currentUser: null, jwt:null, expert:false }, action) {
    switch (action.type) {

    case "SET_CURRENT_USER":
      return {...state, currentUser: action.currentUser, jwt: action.jwt}
    case "SET_CURRENT_EXPERT":
      return {expert: true, currentUser: action.currentUser, jwt: action.jwt}
    case "LOGOUT":
      return {expert: false, currentUser:null, jwt:null}
    default:
      return state
  }
}
