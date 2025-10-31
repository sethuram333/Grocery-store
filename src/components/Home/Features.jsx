import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { RiDiscountPercentFill, RiSecurePaymentLine } from "react-icons/ri";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const Features = () => {
  const data = [
    {
      id: 1,
      icon: <MdDeliveryDining className="text-5xl text-green-700" />,
      title: "Free Delivery",
      desc: "For all orders over ₹150",
    },
    {
      id: 2,
      icon: <RiDiscountPercentFill className="text-5xl text-green-700" />,
      title: "Discounts",
      desc: "Every week new sales",
    },
    {
      id: 3,
      icon: <RiSecurePaymentLine className="text-5xl text-green-700" />,
      title: "Secure Payment",
      desc: "100% secure payment",
    },
    {
      id: 4,
      icon: <IoChatbubbleEllipsesSharp className="text-5xl text-green-700" />,
      title: "Support 24/7",
      desc: "Dedicated support",
    },
  ];

  const renderFeatures = data.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 bg-white shadow-md  p-5 md:p-8 hover:shadow-xl transition-all duration-300"
          >
            {item.icon}
            <div>
              <p className="font-[poppins] text-base md:text-lg font-semibold">
                {item.title}
              </p>
              <p className="font-[poppins] text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))

  return (
    <section className="2xl:container mx-auto mt-10">
      <h1 className="font-[poppins] text-3xl md:text-4xl font-bold text-center">
        Why Choose Us?
      </h1>

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 py-10 md:py-16">
        {renderFeatures}
      </div>
    </section>
  );
};

export default Features;
