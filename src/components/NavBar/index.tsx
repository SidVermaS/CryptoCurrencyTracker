import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePathsE } from '../../App/routes';
import useNavBar from './useNavBar';
import DropdownFiatCurrency from '../DropdownFiatCurrency';
import SearchBar from '../SearchBar';
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';

import { breakpoints } from '../../consts/responsive';
import SearchBarXS from '../SearchBarXS';
import SunOutlined from '@ant-design/icons/lib/icons/SunOutlined';
import MoonOutlined from '@ant-design/icons/lib/icons/MoonOutlined';

const NavBar = (): React.JSX.Element => {
  const {
    isSearchIconClicked,
    theme,
    updateTheme,
    updateIsSearchIconClicked,
    width,
  } = useNavBar();
  return isSearchIconClicked && width <= breakpoints.md ? (
    <SearchBarXS handleClickOutside={updateIsSearchIconClicked} />
  ) : (
    <nav className="bg-primary-light dark:bg-primary-dark fixed w-full h-12 md:h-16 z-10 mx-auto shadow shadow-tertiary-light dark:shadow-tertiary-dark">
      <div className="p-3 md:p-4 flex items-center justify-between">
        <Link
          className="flex items-center font-normal dark:text-primary-dark"
          to={RoutePathsE.HomePage}
        >
          <img className="w-6 h-6 mr-2" src="/bitcoin-btc-logo.png" alt="" />
          Crypto Tracker
        </Link>
        <ul className="flex items-center space-x-3">
          <li>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <SearchOutlined
              className="text-gray-500 text-base md:hidden"
              onClick={updateIsSearchIconClicked.bind(this, true)}
            />
          </li>
          <li className="">
            <DropdownFiatCurrency />
          </li>
          <li
            className="hover:bg-loiter-light dark:hover:bg-loiter-dark rounded-lg w-9 h-9 flex justify-center items-center"
            onClick={updateTheme}
          >
            {theme === 'light' ? (
              <SunOutlined className="text-gray-500  text-base dark:text-primary-dark" />
            ) : (
              <MoonOutlined className="text-gray-500 text-base " />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
