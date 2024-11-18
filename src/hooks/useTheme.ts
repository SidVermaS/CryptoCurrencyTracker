import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateI, useAppDispatch } from '../store/store'
import { toggleTheme } from '../store/reducers/settingsSlice'

const useTheme = () => {
  const dispatch = useAppDispatch()
  const { theme } = useSelector((state: RootStateI) => state.settings)
  const updateTheme = React.useCallback(() => {
    dispatch(toggleTheme())
    console.log(theme);
    
    document.body.classList.toggle(theme)
  }, [dispatch, theme])
  return { theme, updateTheme }
}

export default useTheme