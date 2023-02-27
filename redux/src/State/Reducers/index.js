import { combineReducers } from "redux";
import amountReducer from './AmountReducers'

const  reducers = combineReducers({
    amount: amountReducer
})

export default reducers