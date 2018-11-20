export default function manageExpertProfileVisit(state = { profileLoading: false, expertObject: {} }, action) {
  switch (action.type) {
    case "LOAD_PROFILE":
    return {...state, profileLoading:true }
    case "FETCH_PROFILE":
    debugger
    return {...state, profileLoading:false, expertObject: action.payload}
    default:
    return state
  }
}
