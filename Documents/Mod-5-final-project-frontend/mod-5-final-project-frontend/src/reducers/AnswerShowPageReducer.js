export default function answerShowPageReducer(state =
  {upvotesLoading:false, upvotes: [], upvoteScore: 0 }
  ,action) {
  switch (action.type) {
    case "LOADING_ANSWER_UPVOTES":
    return {...state, upvotesLoading:true }
    case "FETCH_ANSWER_UPVOTES":
    return {...state,upvotesLoading:false,
            upvotes:action.upvotesObject.upvotes,
            upvoteScore:action.upvotesObject.upvoteScore  }

    default:
    return state
  }
}
