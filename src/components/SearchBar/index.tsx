import SearchOutlined from '@ant-design/icons/SearchOutlined';
import React from 'react';
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
        className="flex items-center w-[20rem] rounded-full border focus:none justify-between px-3 py-0.5 dark:border-tertiary-dark"
      >
        <SearchOutlined className="text-gray-400 text-base" />
        <input
          className="mx-1 outline-none caret-purple-500 font-light bg-primary-light dark:bg-primary-dark dark:text-primary-dark"
          type="search"
          placeholder="Enter currency..."
          onChange={handleSearchTextChange}
          value={searchedText}
          onFocus={handleSearchFocus}
        />
        <div
          className="font-light text-2xl items-center text-gray-400 text-center cursor-pointer"
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
