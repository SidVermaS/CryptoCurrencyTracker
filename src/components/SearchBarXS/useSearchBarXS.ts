import React from 'react';
import { RootStateI, useAppDispatch } from '../../store/store';
import {
  addRecentlySearchedCryptoCurrency,
  resetSearchedText,
  searchCryptoCurrency,
  updateAutocompleteForCryptoCurrencies,
} from '../../store/reducers/cryptoCurrenciesSlice';
import { useSelector } from 'react-redux';
import { SearchBarXSPropsI } from './types';
import { RoutePathsE } from '../../App/routes';
import { useNavigate } from 'react-router-dom';

const useSearchBarXS = (props: SearchBarXSPropsI) => {
  const searchBarRef = React.useRef<HTMLDivElement | null>(null);
  const autoCompleteBarRef = React.useRef<HTMLDivElement | null>(null);
  const { searchedText, cryptoCurrenciesForAutocomplete } = useSelector(
    (state: RootStateI) => state.cryptoCurrencies,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
  React.useEffect(() => {
    handleSearchFocus();
  }, [handleSearchFocus]);
  const handleClickOutside = React.useCallback(
    (event: MouseEvent) => {
      if (
        autoCompleteBarRef.current &&
        !autoCompleteBarRef.current.contains(event.target as Node) &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        dispatch(updateAutocompleteForCryptoCurrencies(false));
        props.handleClickOutside(false);
      }
    },
    [dispatch, props],
  );
  const handleSelectedItem = React.useCallback(
    (id: string) => {
      dispatch(addRecentlySearchedCryptoCurrency(id));
      props.handleClickOutside(false);
      navigate(RoutePathsE.CurrencyPage.replace(':id', id));
    },
    [dispatch, navigate, props],
  );
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

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

export default useSearchBarXS;
