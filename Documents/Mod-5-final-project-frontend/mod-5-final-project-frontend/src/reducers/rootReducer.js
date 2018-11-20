import { combineReducers } from "redux"
import manageExpertProfileVisit from "./expertProfileReducer"


const rootReducer = combineReducers({
  expertProfile: manageExpertProfileVisit,
})

export default rootReducer
