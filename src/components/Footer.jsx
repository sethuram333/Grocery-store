import React from "react";
import { Link } from "react-router-dom";
import { PiBasketFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";



const Footer = () => {
  return (
    <>
      <footer className="2xl:container mx-auto py-15 bg-zinc-300 mt-15">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-9">
          {/* content */}

          <div className="flex flex-col gap-4 p-5 ">
            <Link
              to="/"
              className="flex items-center gap-1 text-green-800 text-2xl font-semibold"
            >
              <PiBasketFill className="" />
              <p className="font-[poppins]">
                Green<span className="text-orange-700">Mart</span>
              </p>
            </Link>
            <p className="font-[poppins] text-sm font-light text-zinc-700">
              Bred for a high content of benificial substances.Our products are
              all fresh and healthy
            </p>
            <p className="font-[poppins]">2025 © All Right Reserved</p>
          </div>

          <div className=" flex flex-col gap-4 p-5">
            <p className="text-xl font-[poppins] font-semibold">Company</p>
            <ul className="font-[poppins] flex flex-col gap-y-5  text-sm">
              <li>Products</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div className=" flex flex-col gap-4 p-5">
            <p className="text-xl font-[poppins] font-semibold">Support</p>
            <ul className="font-[poppins] flex flex-col gap-y-5 text-sm">
              <li>Support center</li>
              <li>Feedback</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className=" flex flex-col gap-4 p-5">
            <p className="text-xl font-[poppins] font-semibold">
              Stay Connected
            </p>
            <div className="font-[poppins] text-sm">
              <p>Questions or Feedback?</p>
              <p>we'd love to hear from you.</p>
            </div>

            <div className="bg-white flex items-center justify-center px-2 py-2 rounded">
              <input type="email" placeholder="Enter Email" autoComplete="off" className="p-1 outline-none font-[poppins] text-sm" />
              <MdKeyboardArrowRight  className="text-3xl bg-orange-500 text-white rounded " />

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
