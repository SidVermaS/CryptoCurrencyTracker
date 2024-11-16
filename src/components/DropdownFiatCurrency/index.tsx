import React from "react";
import FiatCurrency from "../FiatCurrency";
import useDropdownFiatCurrency from "./useDropdownFiatCurrency";

const DropdownFiatCurrency = (): React.JSX.Element => {
  const { handleFiatCurrencySelection,selectedFiatCurrency, fiatCurrencies } = useDropdownFiatCurrency();
  return (
    <>
      <button
        type="button"
        className="flex items-center space-x-1.5"
        data-dropdown-toggle="fiat-currency-dropdown-menu"
      >
        <img
          className="rounded-full w-5 h-5"
          src={selectedFiatCurrency.image}
        />
        <div className="hidden md:block text-sm font-normal text-gray-800">
          {selectedFiatCurrency.code}
        </div>
      </button>
      <div className="hidden z-50" id="fiat-currency-dropdown-menu">
        <ul>
          {fiatCurrencies.map((fiatCurrency) => (
            <li onClick={handleFiatCurrencySelection.bind(this, fiatCurrency.id)}>
              <FiatCurrency {...fiatCurrency} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownFiatCurrency;
