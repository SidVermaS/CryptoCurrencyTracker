import React from "react";
import { useSelector } from "react-redux";
import { RootStateI, useAppDispatch } from "../../store/store";
import { selectFiatCurrency } from "../../store/reducers/currenciesSlice";
import { fetchCryptoCurrencies } from "../../store/thunks/currencies";

const useDropdownFiatCurrency = () => {
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);
  const { selectedFiatCurrency, fiatCurrencies } = useSelector(
    (state: RootStateI) => state.currencies,
  );
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleFiatCurrencySelection = React.useCallback(
    (id: string) => {
      dispatch(selectFiatCurrency(id));
      dispatch(fetchCryptoCurrencies());
      setIsDropdownOpen(false);
    },
    [dispatch,  setIsDropdownOpen],
  );
  // Toggles the visibility of the dropdown menu
  const toggleDropdown = React.useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, [setIsDropdownOpen, ]);
  const handleClickOutside = React.useCallback(
    (event: MouseEvent) => {
      // Checks whether the mouse pointer was outside the dropdown menu or not
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // If the mouse pointer is outside the dropdown menu then we'll toggle the dropdown menu & hide it
        setIsDropdownOpen(false);
      }
    },
    [setIsDropdownOpen],
  );
  React.useEffect(() => {
    // Event listener to check whether the user clicked outside the dropdown menu
    document.addEventListener("mousedown", handleClickOutside);
    // Removes the event listener during the destruction of the component
    return () => document.removeEventListener("mousedown", handleClickOutside);
    
  }, [handleClickOutside]);
  return {
    dropdownRef,
    handleFiatCurrencySelection,
    isDropdownOpen,
    selectedFiatCurrency,
    fiatCurrencies,
    toggleDropdown,
  };
};

export default useDropdownFiatCurrency;
