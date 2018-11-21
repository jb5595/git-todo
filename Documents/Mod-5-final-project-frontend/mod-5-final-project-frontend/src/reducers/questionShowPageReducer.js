export default function questionShowPageReducer(state = { questionLoading: false, questionObject: {}, answers: [] }, action) {
  switch (action.type) {
    case "LOADING_QUESTION":
    return {...state, questionLoading:true }
    case "FETCH_QUESTION":
    return {...state, questionLoading:false, questionObject: action.questionObject}
    default:
    return state
  }
}
