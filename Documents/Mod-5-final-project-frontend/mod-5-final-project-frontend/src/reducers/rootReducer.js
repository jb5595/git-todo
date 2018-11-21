import { combineReducers } from "redux"
import manageExpertProfileVisit from "./expertProfileReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  expertProfile: manageExpertProfileVisit,
  userProfile: userReducer
})

export default rootReducer
