import ArrowLeftOutlined from '@ant-design/icons/lib/icons/ArrowLeftOutlined';
import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined';
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';
import React from 'react';
import useSearchBarXS from './useSearchBarXS';
import AutoComplete from '../AutoComplete';
import { SearchBarXSPropsI } from './types';

const SearchBarXS = (props: SearchBarXSPropsI): React.JSX.Element => {
  const {
    autoCompleteBarRef,
    handleSearchFocus,
    handleSearchTextChange,
    handleSelectedItem,
    searchBarRef,
    searchedText,
    clearSearchText,
  } = useSearchBarXS(props);
  return (
    <>
      <nav className="bg-white flex items-center fixed w-full h-12 md:h-16 z-10 mx-auto shadow shadow-gray-200 px-6">
        <div>
          <ArrowLeftOutlined className="text-gray-500 text-base " />
        </div>
        <div className=" flex items-center basis-full  ml-6">
          <div className=" basis-[100%] " ref={searchBarRef}>
            <input
              className="outline-none caret-purple-500 font-light w-full "
              type="search"
              placeholder="Enter currency..."
              onChange={handleSearchTextChange}
              value={searchedText}
              onFocus={handleSearchFocus}
            />
          </div>
          <div className="ml-6  ">
            {searchedText?.length ? (
              <CloseOutlined
                className="text-gray-500 text-base "
                onClick={clearSearchText}
              />
            ) : (
              <SearchOutlined className="text-gray-500 text-base " />
            )}
          </div>
        </div>
      </nav>
      <div className="absolute top-12 left-14" ref={autoCompleteBarRef}>
        <AutoComplete handleSelectedItem={handleSelectedItem} />
      </div>
    </>
  );
};

export default SearchBarXS;
