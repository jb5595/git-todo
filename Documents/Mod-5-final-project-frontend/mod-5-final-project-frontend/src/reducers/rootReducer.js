import { combineReducers } from "redux"
import manageExpertProfileVisit from "./expertProfileReducer"
import userProfileReducer from "./userProfileReducer"
import questionShowPageReducer from "./questionShowPageReducer"

const rootReducer = combineReducers({
  expertProfile: manageExpertProfileVisit,
  userProfile: userProfileReducer,
  questionShow: questionShowPageReducer
})

export default rootReducer
