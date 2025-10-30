import React from "react";

const Topic = (props) => {
  return (
    <>
      <div className="w-fit mx-auto ">
        <h2 className="text-3xl md:text-4xl font-semibold font-[poppins] underline underline-offset-20">
          <span className="text-orange-500">{props.first}</span> <span className="text-green-800">{props.second}</span>
        </h2>
      </div>
    </>
  );
};

export default Topic;
