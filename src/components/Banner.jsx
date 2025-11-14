import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="text-center items-center">
        <h1 className="text-4xl font-bold text-[#001931]">
          We Build <br />
          <span className="text-purple-500">Productive</span> Apps
        </h1>
        <p className="mt-3 text-[#627382]">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="space-x-3 mt-5">
          <a href="https://play.google.com/store/apps" target="_blank">
            <button className="btn btn-outline font-bold">
              <img src="https://i.ibb.co.com/N631vYv1/Play-store.png" alt="" />
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <button className="btn btn-outline font-bold">
              <img src="https://i.ibb.co.com/nNHCsVWm/Apps-store.png" alt="" />
              App Store
            </button>
          </a>
        </div>
      </div>
      <div className="mt-8">
        <img
          className="h-86 mx-auto"
          src="https://i.ibb.co.com/9Hyw3Pxt/hero.png"
          alt=""
        />
      </div>
      <div className="py-8 bg-gradient-to-r from-blue-600 to-purple-500 text-center text-white">
        <h1 className="text-3xl font-semibold ">
          Trusted by Millions, Built for You
        </h1>
        <div className="pt-5 grid grid-cols-1 md:grid-cols-3 justify-between items-center text-center mx-auto w-3/4">
          <div className="mt-3">
            <p className="text-gray-300">Total Downloads</p>
            <h1 className="text-4xl font-bold">29.6M</h1>
            <p className="text-gray-300">21% more than last month</p>
          </div>
          <div className="mt-3">
            <p className="text-gray-300">Total Reviews</p>
            <h1 className="text-4xl font-bold">906K</h1>
            <p className="text-gray-300">46% more than last month</p>
          </div>
          <div className="mt-3">
            <p className="text-gray-300">Active Apps</p>
            <h1 className="text-4xl font-bold">132+</h1>
            <p className="text-gray-300">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;