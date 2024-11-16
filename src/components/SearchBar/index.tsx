import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

const SearchBar = (): React.JSX.Element => {
  const [searchedText, setSearchedText] = React.useState<string>('');

  const clearSearchText = React.useCallback(
    () => {
      setSearchedText('');
    },
    [setSearchedText],
  );
  const handleSearchTextChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchedText(event.target.value);
    },
    [setSearchedText],
  );
  return (
    <div className="flex items-center rounded-full border focus:none px-3 py-0.5">
      <SearchOutlined className="text-gray-400 text-base mr-3" />
      <input
        className="outline-none caret-purple-500 font-light"
        type="search"
        placeholder="Enter currency..."
        onChange={handleSearchTextChange}
        value={searchedText}
      />
      <div className='ml-3 font-light text-2xl items-center text-gray-400 text-center' onClick={clearSearchText}>&times;</div>
    </div>
  );
};

export default SearchBar;
