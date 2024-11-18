import React from 'react';
import {MdSearch} from 'react-icons/md'
import useSearchBar from './useSearchBar';
import AutoComplete from '../AutoComplete';

const SearchBar = (): React.JSX.Element => {
  const {
    autoCompleteBarRef,
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
        className="flex items-center w-[20rem] rounded-full border focus:none justify-between px-3 py-0.5"
      >
        <MdSearch className="text-gray-400 text-base" />
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
      <div ref={autoCompleteBarRef}>
        <AutoComplete handleSelectedItem={handleSelectedItem} />
      </div>
    </>
  );
};

export default SearchBar;
