import { RootStateI } from '../../store/store';
import { useSelector } from 'react-redux';
const useAutoComplete = () => {
  const { searchedText, cryptoCurrenciesForAutocomplete } = useSelector(
    (state: RootStateI) => state.cryptoCurrencies,
  );
  return {
    cryptoCurrenciesForAutocomplete,
    searchedText,
  };
};

export default useAutoComplete;
