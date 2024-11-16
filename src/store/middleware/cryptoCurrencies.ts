// import { Middleware } from "@reduxjs/toolkit"
// import { AppDispatchI, RootStateI } from "../store"
// import { MINUTES_5 } from "../../consts/time"
// import { fetchCryptoCurrencies } from "../thunks/cryptoCurrencies"

// export const cryptoCurrenciesExpirationMiddleware: Middleware<{}, RootStateI> = store => next => (action) => {
//   if(action.t){
//   const state = store.getState()
//   const { lastFetched } = state.cryptoCurrencies
//   if (lastFetched && (Date.now() - lastFetched) > MINUTES_5) {
//     (store.dispatch as AppDispatchI)(fetchCryptoCurrencies())
//   }}
//   return next(action)
// }
