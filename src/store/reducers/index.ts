import { combineReducers, } from '@reduxjs/toolkit'

import currenciesSliceReducer from './currenciesSlice'

// Combines all of the reducers in the app in a single constant variable
const rootReducer = combineReducers({
  currencies: currenciesSliceReducer
})
export default rootReducer