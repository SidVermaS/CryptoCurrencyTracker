import React from "react"
import { MINUTES_5 } from "../../consts/time"
import {  useAppDispatch } from "../../store/store"
import { fetchCryptoCurrencies } from "../../store/thunks/currencies"

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
  }, [])
  return {}
}
export default useHomePage