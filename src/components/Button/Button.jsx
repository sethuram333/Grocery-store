import React from "react";
import { Link } from "react-router-dom";
const Button = (props) => {
  return (
    <>
      <Link to={props.link}>
        <button className="bg-orange-500 px-5 py-3 font-[poppins] rounded-md text-white  hover:bg-green-700 transition-all duration-300 cursor-pointer">
          {props.content}
        </button>
      </Link>
    </>
  );
};

export default Button;
