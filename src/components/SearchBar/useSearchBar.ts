import React from 'react'
import { RootStateI, useAppDispatch } from '../../store/store';
import { addRecentlySearchedCryptoCurrency, resetSearchedText, searchCryptoCurrency, updateAutocompleteForCryptoCurrencies, } from '../../store/reducers/cryptoCurrenciesSlice';
import { useSelector } from 'react-redux';

const useSearchBar = () => {
  const searchBarRef = React.useRef<HTMLDivElement | null>(null);
  const autoCompleteBarRef = React.useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = React.useState<boolean>(false)
  const { searchedText, cryptoCurrenciesForAutocomplete } = useSelector((state: RootStateI) => state.cryptoCurrencies)
  const dispatch = useAppDispatch();
  // Clears the searched text from the search box
  const clearSearchText = React.useCallback(() => {
    dispatch(resetSearchedText());
  }, [dispatch]);
  const handleSearchTextChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value;
      dispatch(searchCryptoCurrency(text));
    },
    [dispatch,],
  );

  const updateIsFocused = React.useCallback(
    (value: boolean) => {
      setIsFocused(value);
      if (value) {
        dispatch(updateAutocompleteForCryptoCurrencies(value))
      }
    },
    [setIsFocused, dispatch],
  );
  // const handleClickOutside = React.useCallback((event: MouseEvent) => {
  //   if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
  //     clearSearchText();
  //   }
  // }, [clearSearchText]);

  // React.useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [handleClickOutside]);
  const handleSelectedItem = React.useCallback((id: string) => {
    console.log('1111 handleSelectedItem', id);

    dispatch(addRecentlySearchedCryptoCurrency(id))
    updateIsFocused(false)
  }, [dispatch, updateIsFocused])
  return {
    autoCompleteBarRef, cryptoCurrenciesForAutocomplete,
    handleSearchTextChange, handleSelectedItem, isFocused, searchBarRef,
    searchedText,
    clearSearchText, updateIsFocused
  }
}

export default useSearchBar