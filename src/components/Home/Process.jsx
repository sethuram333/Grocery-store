import React from "react";
import Topic from "../Topic/Topic";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlant, PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    description: "We source premium materials from trusted suppliers.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    description: "Crafted with precision using modern technology.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    description: "Each product is inspected for top-notch quality.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    description: "Delivered safely and quickly to your doorstep.",
    icon: <BsTruck />,
  },
];

const Process = () => {
  return (
    <section className="2xl:container mx-auto  px-6 md:px-10 py-16 md:py-20">
      <Topic first="Our" second="Process" />

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
        {steps.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl transition-all duration-300"
          >
            {/* Step number */}
            <div className="flex justify-center items-center w-20 h-20 text-6xl text-white bg-zinc-800 rounded-full outline-dashed outline-zinc-800 outline-offset-4 mb-5">
              {item.number}
            </div>

            {/* Icon + text */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl bg-orange-500 text-white w-14 h-14 flex justify-center items-center rounded-full">
                {item.icon}
              </div>
              <h3 className="font-[poppins] text-lg font-semibold mt-2">
                {item.title}
              </h3>
              <p className="font-[poppins] text-sm text-gray-700">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
