import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBasketFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white  z-50">
         <div className="2xl:container mx-auto bg-[#FFF]  py-5 md:shadow-lg">
        <div className="w-[90%] mx-auto  grid grid-cols-2 md:grid-cols-3">
          {/* logo */}
          <div className="">
            <Link
              to="/"
              className="flex items-center gap-1 text-green-800 text-2xl font-semibold"
            >
              <PiBasketFill className="" />
              <p className="font-[poppins]">
                Green<span className="text-orange-700">Mart</span>
              </p>
            </Link>
          </div>
          {/* nav pages */}
          <div className="hidden md:flex items-center ">
            <ul className="flex items-center justify-center gap-x-8 font-[poppins]">
              <li>
                <Link
                  to="/"
                  className="text-green-800 hover:text-orange-500 text-[18px]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="allproducts"
                  className="text-green-800 hover:text-orange-500 text-[18px]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-green-800
                   hover:text-orange-500 text-[18px]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* login and cart */}
          <div className="flex items-center text-2xl justify-end gap-5">
            <FaHeart className="text-green-800 hover:text-red-600" />
            <CgProfile className="text-green-800 hover:text-orange-500" />
            <FaCartPlus className="text-green-800 hover:text-orange-500" />
            <GiHamburgerMenu
              className="text-green-800 hover:text-orange-500 md:hidden"
              onClick={toggleMenu}
            />
          </div>

          {/*mobile view nav pages */}
          <div
            className={`md:hidden  absolute top-[90px] left-0 w-full rounded-lg shadow-xl bg-green-500/10 backdrop-blur-xl transition-all duration-300 ease-in-out ${
              showMenu ? "opacity-100 visible" : "opacity-0 invisible"
            } `}
          >
            <ul className="font-[poppins] flex flex-col items-center py-20 gap-y-8">
              <li>
                <Link
                  to="/"
                  onClick={() => setShowMenu(false)}
                  className="text-green-800 hover:text-orange-500 text-[18px]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="allproducts"
                  onClick={() => setShowMenu(false)}
                  className="text-green-800 hover:text-orange-500 text-[18px]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="sdcsdcsd"
                  onClick={() => setShowMenu(false)}
                  className="text-green-800
                   hover:text-orange-500 text-[18px]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </header>
     
    </>
  );
};

export default Header;
