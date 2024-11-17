import React from 'react';
import { RootStateI, useAppDispatch } from '../../store/store';
import {
  addRecentlySearchedCryptoCurrency,
  resetSearchedText,
  searchCryptoCurrency,
  updateAutocompleteForCryptoCurrencies,
} from '../../store/reducers/cryptoCurrenciesSlice';
import { useSelector } from 'react-redux';

const useSearchBar = () => {
  const searchBarRef = React.useRef<HTMLDivElement | null>(null);
  const autoCompleteBarRef = React.useRef<HTMLDivElement | null>(null);
  const { searchedText, cryptoCurrenciesForAutocomplete } = useSelector(
    (state: RootStateI) => state.cryptoCurrencies,
  );
  const dispatch = useAppDispatch();

  const handleSearchTextChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value;
      dispatch(searchCryptoCurrency(text));
    },
    [dispatch],
  );
  const clearSearchText = React.useCallback(() => {
    dispatch(resetSearchedText());
  }, [dispatch]);
  const handleSearchFocus = React.useCallback(() => {
    dispatch(updateAutocompleteForCryptoCurrencies(true));
  }, [dispatch]);
  const handleClickOutside = React.useCallback(
    (event: MouseEvent) => {
      if (
        autoCompleteBarRef.current &&
        !autoCompleteBarRef.current.contains(event.target as Node) &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        dispatch(updateAutocompleteForCryptoCurrencies(false));
      }
    },
    [dispatch],
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);
  const handleSelectedItem = React.useCallback(
    (id: string) => {
      console.log('1111 handleSelectedItem', id);

      dispatch(addRecentlySearchedCryptoCurrency(id));
    },
    [dispatch],
  );
  return {
    autoCompleteBarRef,
    clearSearchText,
    cryptoCurrenciesForAutocomplete,
    handleSearchFocus,
    handleSearchTextChange,
    handleSelectedItem,
    searchBarRef,
    searchedText,
  };
};

export default useSearchBar;
