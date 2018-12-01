import { combineReducers } from "redux"
import manageExpertProfileVisit from "./expertProfileReducer"
import userProfileReducer from "./userProfileReducer"
import questionShowPageReducer from "./questionShowPageReducer"
import manageCurrentUser from "./UserSessionReducer"
import answerShowPageReducer from "./AnswerShowPageReducer"

const rootReducer = combineReducers({
  expertProfile: manageExpertProfileVisit,
  userProfile: userProfileReducer,
  questionShow: questionShowPageReducer,
  userSession: manageCurrentUser,
  answerShow: answerShowPageReducer
})

export default rootReducer
