import React from "react"
import { MINUTES_5 } from "../../consts/time"
import {  useAppDispatch } from "../../store/store"
import { fetchCryptoCurrencies } from "../../store/thunks/currencies"
import { CryptoHeadColumnI } from "./types"
export const cryptoTableColumns:CryptoHeadColumnI[]=[
  {className:"text-left pl-3",title:"Coin"},
  {className:"text-right pr-3",title:"Price"},
  {className:'text-right pr-3',title:"Market Cap"},
  {className:'text-right pr-3',title:'24h %'}
]
const useHomePage = () => {
  
  const dispatch = useAppDispatch()
  // Updates the latest data after every 5 minutes
  React.useEffect(() => {
    dispatch(fetchCryptoCurrencies())
    let intervalRef: number | null = setInterval(() => {
      dispatch(fetchCryptoCurrencies())
    }, MINUTES_5)
    return () => {
      clearInterval(intervalRef!)
      intervalRef = null
    }
  }, [dispatch])
  return {cryptoTableColumns}
}
export default useHomePage