import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import useSearchBar from './useSearchBar';
import AvatarInfo from '../AvatarInfo';

const SearchBar = (): React.JSX.Element => {
  const {
    autoCompleteBarRef,
    cryptoCurrenciesForAutocomplete,
    handleSearchFocus,
    handleSearchTextChange,
    handleSelectedItem,
    searchBarRef,
    searchedText,
    clearSearchText,
  } = useSearchBar();

  return (
    <>
      <div
        ref={searchBarRef}
        className="flex items-center  w-[20rem] rounded-full border focus:none justify-between px-3 py-0.5"
      >
        <SearchOutlined className="text-gray-400 text-base" />
        <input
          className="mx-1 outline-none caret-purple-500 font-light"
          type="search"
          placeholder="Enter currency..."
          onChange={handleSearchTextChange}
          value={searchedText}
          onFocus={handleSearchFocus}
        />
        <div
          className="font-light text-2xl items-center text-gray-400 text-center"
          onClick={clearSearchText}
        >
          &times;
        </div>
      </div>
      <div
        ref={autoCompleteBarRef}
        className="absolute bg-white z-10 shadow shadow-gray-200 rounded-lg  w-[20rem]"
      >
        {searchedText?.length ? (
          cryptoCurrenciesForAutocomplete?.length ? (
            <div className="py-2 px-3 cursor-pointer">
              {cryptoCurrenciesForAutocomplete.map((cryptoCurrency) => (
                <div
                  key={cryptoCurrency.id}
                  onClick={handleSelectedItem.bind(this, cryptoCurrency.id)}
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
                onClick={handleSelectedItem.bind(this, cryptoCurrency.id)}
              >
                <AvatarInfo {...cryptoCurrency} isInline={true} />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SearchBar;
