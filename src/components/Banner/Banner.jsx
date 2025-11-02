import React from "react";

const Banner = ({title,bgImage}) => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto mt-15 flex justify-center items-center bg-center bg-cover h-[20vh] md:h-[60vh] shadow-xl rounded-2xl  " style={{backgroundImage:`url(${bgImage})`}}>
               <h2 className="text-3xl md:text-5xl text-zinc-800 p-5 rounded-md font-bold font-[poppins] bg-white">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default Banner;
