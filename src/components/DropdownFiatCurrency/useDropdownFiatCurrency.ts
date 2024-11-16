import React from 'react'
import { useSelector } from 'react-redux';
import { RootStateI, useAppDispatch } from '../../store/store';
import { selectFiatCurrency } from '../../store/reducers/currenciesSlice';
import { fetchCryptoCurrencies } from '../../store/thunks/currencies';

const useDropdownFiatCurrency = () => {
  const dropdownRef = React.useRef<HTMLDivElement | null>(null)
  const { selectedFiatCurrency, fiatCurrencies } = useSelector(
    (state: RootStateI) => state.currencies
  );
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false)
  const dispatch = useAppDispatch()
  const handleFiatCurrencySelection = React.useCallback((id: string) => {
    dispatch(selectFiatCurrency(id))
    dispatch(fetchCryptoCurrencies())
    setIsDropdownOpen(false)
  }, [selectFiatCurrency, fetchCryptoCurrencies, setIsDropdownOpen])
  const toggleDropdown = React.useCallback(() => {
    setIsDropdownOpen(prev => !prev)
  }, [setIsDropdownOpen, setIsDropdownOpen])
  const handleClickOutside = React.useCallback( (event: MouseEvent) => { 
    if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node))  {
      setIsDropdownOpen(false)
    }
  },[setIsDropdownOpen])
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return { dropdownRef, handleFiatCurrencySelection, isDropdownOpen, selectedFiatCurrency, fiatCurrencies, toggleDropdown }
}

export default useDropdownFiatCurrency