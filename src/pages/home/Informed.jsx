import React from "react";
import "./BackgroundImage.css";
import { FaLink, FaQuoteRight } from "react-icons/fa";

const Informed = () => {
  return (
    <div className="max-w-screen-xl m-auto mt-24 mb-16">
      <h4 className="text-[#BF9B79] text-center">ALL NEWS</h4>
      <h1 className="text-5xl font-semibold mt-6 text-center mb-16">Stay Informed</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1">
          <div className="bg-02 text-center p-12">
            <a
              className="text-white text-3xl"
              href="https://www.linkedin.com/in/coders-rabbi/"
            >
              www.hotel.com
            </a>
            <div className="flex justify-center">
              <FaLink className="text-white text-3xl mt-3" />
            </div>
          </div>
          <div className="img-06 h-[500px] mt-5"></div>
          <div className="p-10">
            <div className="flex items-center gap-5">
              <p className="bg-[#BF9B79] w-1 h-5"></p>
              <p className="text-xl">2021-03-26</p>
            </div>
            <h2 className="text-2xl font-semibold mt-5">Daily Sanitizing</h2>
            <p className="leading-7 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pharetra, risus ac hendrerit consectetur, elit nisl luctus est.
            </p>
            <button className="bg-[#BF9B79] px-5 py-2 text-white text-xl uppercase mt-6">
              Read More
            </button>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-5">
          <div className="img-05 h-80"></div>
          <div className="bg-01 h-80 p-16 text-white text-center">
            <h1 className="text-2xl font-semibold mb-8">
              A Excellent Restaurant is like a tasty & good vacation.
            </h1>
            <p>Emily Miller</p>
            <div className="flex justify-center mt-5">
              <FaQuoteRight className="text-3xl" />
            </div>
          </div>
          <div className="p-10">
            <div className="flex items-center gap-5">
              <p className="bg-[#BF9B79] w-1 h-5"></p>
              <p className="text-xl">2021-03-26</p>
            </div>
            <h2 className="text-2xl font-semibold mt-5">24h Reception</h2>
            <p className="leading-7 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pharetra, risus ac hendrerit consectetur, elit nisl luctus est.
            </p>
            <button className="bg-[#BF9B79] px-5 py-2 text-white text-xl uppercase mt-6">
              Read More
            </button>
          </div>
          <div className="img-03 h-80"></div>
          <div className="img-07 h-80"></div>
          <div className="p-10">
            <div className="flex items-center gap-5">
              <p className="bg-[#BF9B79] w-1 h-5"></p>
              <p className="text-xl">2021-03-26</p>
            </div>
            <h2 className="text-2xl font-semibold mt-5">Daily Sanitizing</h2>
            <p className="leading-7 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pharetra, risus ac hendrerit consectetur, elit nisl luctus est.
            </p>
            <button className="bg-[#BF9B79] px-5 py-2 text-white text-xl uppercase mt-6">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informed;
