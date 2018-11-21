export default function userReducer(state = { userLoading: false, userObject: {} }, action) {
  switch (action.type) {
    case "LOADING_USER":
    return {...state, userLoading:true }
    case "FETCH_USER":
    return {...state, userLoading:false, userObject: action.userObject}
    default:
    return state
  }
}
