import React from "react";
import { FaTruck, FaHeadset, FaRedo, FaShoppingBag } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-blue-600 text-2xl" />,
    title: "Free Shipping",
    description: "We Deliver Free Shipping World Wide",
    borderColor: "border-blue-500",
  },
  {
    icon: <FaHeadset className="text-red-600 text-2xl" />,
    title: "Support 24/8",
    description: "We Support Our Customers 24 Hours",
    borderColor: "border-red-500",
  },
  {
    icon: <FaRedo className="text-green-600 text-2xl" />,
    title: "Returns",
    description: "You Can Return Product After 7 Days",
    borderColor: "border-green-500",
  },
  {
    icon: <FaShoppingBag className="text-orange-600 text-2xl " />,
    title: "Track Order",
    description: "You Can Track Your Product in Online",
    borderColor: "border-orange-500",
  },
];

const Section4 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 p-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`w-48 text-center border-2 ${feature.borderColor} p-6 rounded-[20%] shadow-2xl shadow-red-300 bg-white`}
        >
    
          <div className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-gray-500 text-sm mt-1">{feature.description}</p>
        </div>

      ))}
    </div>
  );
};

export default Section4;