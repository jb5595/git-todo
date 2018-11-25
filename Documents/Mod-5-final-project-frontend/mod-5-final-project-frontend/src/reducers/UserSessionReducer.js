export default function manageCurrentUser(state = { currentUser: null, jwt:null, expert:false }, action) {
    switch (action.type) {

    case "SET_CURRENT_USER":
      return {...state, currentUser: action.currentUser, jwt: action.jwt}
    default:
      return state
  }
}
