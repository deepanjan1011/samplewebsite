import React from "react";
import { FaBars } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex item-centre justify-center gap-2" >
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl  lg:text-lg lg:px-1.5 lg:py-2.5">Hosterr is hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Domains</a></li>
        <li><a href="#">why hosterr</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-gray-400" href="#">Login in</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
