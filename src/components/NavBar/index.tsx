import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePathsE } from '../../App/routes';
import useNavBar from './useNavBar';
import DropdownFiatCurrency from '../DropdownFiatCurrency';
import SearchBar from '../SearchBar';
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';

import { breakpoints } from '../../consts/responsive';
import SearchBarXS from '../SearchBarXS';

const NavBar = (): React.JSX.Element => {
  const { isSearchIconClicked, updateIsSearchIconClicked, width } = useNavBar();
  return isSearchIconClicked && width <= breakpoints.md ? (
    <SearchBarXS handleClickOutside={updateIsSearchIconClicked} />
  ) : (
    <nav className="bg-white fixed w-full h-12 md:h-16 z-10 mx-auto shadow shadow-gray-200">
      <div className="p-3 md:p-4 flex items-center justify-between">
        <Link
          className="flex items-center font-normal"
          to={RoutePathsE.HomePage}
        >
          <img className="w-6 h-6 mr-2" src="/bitcoin-btc-logo.png" alt="" />
          Crypto Tracker
        </Link>
        <ul className="flex items-center space-x-5">
          <li>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <SearchOutlined
              className="text-gray-700 text-base md:hidden"
              onClick={updateIsSearchIconClicked.bind(this, true)}
            />
          </li>
          <li>
            <DropdownFiatCurrency />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
