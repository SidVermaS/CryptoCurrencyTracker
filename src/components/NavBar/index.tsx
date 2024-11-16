import React from "react";
import { Link } from "react-router-dom";
import { RoutePathsE } from "../../App/routes";
import { SearchOutlined } from "@ant-design/icons";
import useNavBar from "./useNavBar";
import DropdownFiatCurrency from "../DropdownFiatCurrency";

  const NavBar = (): React.JSX.Element => {
    const {} = useNavBar();
  return (
    <nav className="bg-white border-gray-400 fixed w-full z-10 mx0auto">
      <div className="p-3 md:p-4 flex items-center justify-between">
        <Link to={RoutePathsE.HomePage}>Crypto Tracker</Link>
        <ul className="flex items-center space-x-5">
          <li>
            <SearchOutlined className="text-gray-700 text-base" />
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
