import React from 'react';
import useAutoComplete from './useAutoComplete';
import AvatarInfo from '../AvatarInfo';
import { AutoCompletePropsI } from './types';

const AutoComplete = (props: AutoCompletePropsI): React.JSX.Element => {
  const { cryptoCurrenciesForAutocomplete, searchedText } = useAutoComplete();
  return (
    <div className="absolute bg-white z-10 shadow shadow-gray-200 rounded-lg  w-[20rem]">
      {searchedText?.length ? (
        cryptoCurrenciesForAutocomplete?.length ? (
          <div className="py-2 px-3 cursor-pointer">
            {cryptoCurrenciesForAutocomplete.map((cryptoCurrency) => (
              <div
                key={cryptoCurrency.id}
                onClick={props.handleSelectedItem.bind(this, cryptoCurrency.id)}
              >
                <AvatarInfo {...cryptoCurrency} isInline={true} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-2 px-3 font-light">No results found</div>
        )
      ) : cryptoCurrenciesForAutocomplete?.length ? (
        <div className="py-2 px-3 cursor-pointer">
          <div className="font-normal text-gray-500 text-sm mb-1">Recent</div>
          {cryptoCurrenciesForAutocomplete.map((cryptoCurrency) => (
            <div
              key={cryptoCurrency.id}
              onClick={props.handleSelectedItem.bind(this, cryptoCurrency.id)}
            >
              <AvatarInfo {...cryptoCurrency} isInline={true} />
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AutoComplete;
