import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateI, useAppDispatch } from '../store/store'
import {  toggleTheme, } from '../store/reducers/settingsSlice'
import { ThemesI } from '../types/store/settings'

const useTheme = () => {
  const dispatch = useAppDispatch()
  const { theme } = useSelector((state: RootStateI) => state.settings)
  const updateTheme = React.useCallback(() => {
    dispatch(toggleTheme())
    document.body.classList.toggle('dark' as ThemesI)
  }, [dispatch, theme])
  return { theme, updateTheme }
}

export default useTheme