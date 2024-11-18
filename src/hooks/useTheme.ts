import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateI } from '../store/store'

const useTheme = () => {
  const { theme } = useSelector((state: RootStateI) => state.settings)
  const updateTheme = React.useCallback(() => {

  }, [])
  return { theme }
}

export default useTheme