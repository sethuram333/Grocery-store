import React from "react";
import { Link } from "react-router-dom";
import { PiBasketFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="2xl:container mx-auto py-12 bg-zinc-300 mt-12">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-9">

        {/* Brand Section */}
        <div className="flex flex-col gap-4 p-5">
          <Link
            to="/"
            className="flex items-center gap-1 text-green-800 text-2xl font-semibold"
          >
            <PiBasketFill />
            <p className="font-[poppins]">
              Green<span className="text-orange-700">Mart</span>
            </p>
          </Link>
          <p className="font-[poppins] text-sm text-zinc-700">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="font-[poppins] text-xs text-zinc-600">
            © 2025 All Rights Reserved
          </p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4 p-5">
          <p className="text-xl font-[poppins] font-semibold">Company</p>
          <ul className="font-[poppins] flex flex-col gap-y-3 text-sm">
            <li className="hover:text-orange-600 cursor-pointer">Products</li>
            <li className="hover:text-orange-600 cursor-pointer">FAQ's</li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-4 p-5">
          <p className="text-xl font-[poppins] font-semibold">Support</p>
          <ul className="font-[poppins] flex flex-col gap-y-3 text-sm">
            <li className="hover:text-orange-600 cursor-pointer">Support Center</li>
            <li className="hover:text-orange-600 cursor-pointer">Feedback</li>
            <li className="hover:text-orange-600 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 p-5">
          <p className="text-xl font-[poppins] font-semibold">Stay Connected</p>
          <div className="font-[poppins] text-sm">
            <p>Questions or feedback?</p>
            <p>We'd love to hear from you.</p>
          </div>

          <div className="bg-white flex items-center rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              className="flex-1 p-2 outline-none font-[poppins] text-sm"
            />
            <button
              aria-label="Submit email"
              className="bg-orange-500 p-2 text-white hover:bg-orange-600 transition-all"
            >
              <MdKeyboardArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
