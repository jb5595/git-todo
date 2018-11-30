export default function questionShowPageReducer(state =
  { questionLoading: false, questionObject: {}, upvotesLoading:false, upvote: [], answers: [] }
  ,action) {
  switch (action.type) {
    case "LOADING_QUESTION":
    return {...state, questionLoading:true }
    case "FETCH_QUESTION":
    return {...state, questionLoading:false, questionObject: action.questionObject}
    case "LOADING_UPVOTES":
    return {...state, upvotesLoading:true }
    case "FETCH_UPVOTES":
    return {...state, upvotes:action.upvotes  }

    default:
    return state
  }
}
