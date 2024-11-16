import React from "react";
import { Link } from "react-router-dom";
import { RoutePathsE } from "../../App/routes";
import useNavBar from "./useNavBar";
import DropdownFiatCurrency from "../DropdownFiatCurrency";
import SearchBar from "../SearchBar";

  const NavBar = (): React.JSX.Element => {
    const {} = useNavBar();
  return (
    <nav className="bg-white fixed w-full z-10 mx-auto shadow shadow-gray-200">
      <div className="p-3 md:p-4 flex items-center justify-between">
        <Link to={RoutePathsE.HomePage}>Crypto Tracker</Link>
        <ul className="flex items-center space-x-5">
          <li>
            <SearchBar />
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
