import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <>
      <div className="2xl:container min-h-screen mx-auto pt-35 ">
        <div className="w-[90%] mx-auto  grid grid-cols-1 lg:grid-cols-2 p-5">
          {/* content */}
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-4xl/14 md:text-6xl/20 font-bold font-[poppins] mt-5">
              Tasty Organic <br />
              <span className="text-green-500">Fruits</span> &
              <span className="text-green-500">Veggies</span> <br /> In Your
              City
            </h1>
            <p className=" font-[poppins] text-sm md:text-lg max-w-[530px] mt-5 mb-10">
              Bred for high content of benificial substances.Our products are
              all fresh healthy
            </p>

            <div>
              <Button content="shop now" link="allproducts" />
            </div>
          </div>

          {/* image */}
          <div>
            <img
              src="https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/herobanner.jpg"
              alt="herobanner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
