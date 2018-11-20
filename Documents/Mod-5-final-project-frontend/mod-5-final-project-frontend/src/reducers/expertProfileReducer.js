export default function manageExpertProfileVisit(state = { profileLoading: false, expertObject: {} }, action) {
  switch (action.type) {
    case "LOADING_PROFILE":
    return {...state, profileLoading:true }
    case "FETCH_PROFILE":
    return {...state, profileLoading:false, expertObject: action.expertObject}
    default:
    return state
  }
}
