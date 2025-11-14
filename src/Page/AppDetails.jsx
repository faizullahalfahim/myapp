import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";

import { ToastContainer, toast } from "react-toastify";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Cardload from "../components/CardLoad";

const AppDetails = () => {
  const { id } = useParams();

  const allApps = useLoaderData();

  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("install")) || [];
    setInstalledApps(existingData);
  }, []);

  if (!Array.isArray(allApps) || allApps.length === 0) {
    return <Cardload count={1} />;
  }

  const appData = allApps.find((p) => String(p.id) === id);

  if (!appData) {
    return (
      <div className="flex justify-center w-full min-h-screen items-center">
        <img
          src="https://i.ibb.co.com/dYjZ1vk/App-Error.png"
          alt="App Not Found Error"
        />
      </div>
    );
  }

  const {
    image,
    title,
    reviews,
    ratingAvg,
    downloads,
    companyName,
    size,
    description,
    ratings,
    id: appID,
  } = appData;

  const handleInstall = () => {
    const existingData = JSON.parse(localStorage.getItem("install")) || [];
    let updatedData = [];

    const isDuplicate = existingData.some((p) => p.id === appData.id);
    if (isDuplicate) return toast.info("Sorry, this app is already installed.");

    updatedData = [...existingData, appData];

    localStorage.setItem("install", JSON.stringify(updatedData));

    setInstalledApps(updatedData);
    toast.success("App installed successfully! ✅");
  };

  const isInstalled = installedApps.some((item) => item.id === appID);

  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-4 md:px-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-8 md:space-y-0 mx-2 border-b pb-8 border-gray-300">
        <div className="flex-shrink-0">
          <img
            className="w-full max-w-sm md:max-w-xs lg:max-w-md h-auto object-contain rounded-xl shadow-xl"
            src={image}
            alt={`${title} App Screenshot`}
          />
        </div>
        <div className="flex-grow">
          <div className="border-b pb-4 border-gray-300">
            <h1 className="text-4xl font-extrabold text-[#001931]">{title}</h1>
            <p className="pt-3 text-lg">
              Developed by:{" "}
              <span className="text-violet-600 font-bold"> {companyName} </span>
            </p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-4 text-center">
            <div className="p-3 border rounded-lg shadow-sm">
              <img
                className="w-10 h-10 mx-auto"
                src="https://i.ibb.co.com/PZdhgvdd/icon-downloads.png"
                alt="Downloads Icon"
              />
              <p className="text-sm text-gray-500 py-1">Downloads</p>
              <h1 className="text-xl font-bold">
                {downloads.toLocaleString()}
              </h1>
            </div>
            <div className="p-3 border rounded-lg shadow-sm">
              <img
                className="w-10 h-10 mx-auto"
                src="https://i.ibb.co.com/JF8WBnVs/icon-ratings.png"
                alt="Ratings Icon"
              />
              <p className="text-sm text-gray-500 py-1">Average Ratings</p>
              <h1 className="text-xl font-bold">{ratingAvg} / 5.0</h1>
            </div>
            <div className="p-3 border rounded-lg shadow-sm">
              <img
                className="w-10 h-10 mx-auto"
                src="https://i.ibb.co.com/zhCvPyxq/icon-review.png"
                alt="Reviews Icon"
              />
              <p className="text-sm text-gray-500 py-1">Total Reviews</p>
              <h1 className="text-xl font-bold">{reviews.toLocaleString()}</h1>
            </div>
          </div>

          <div className="mt-6">
            <button
              disabled={isInstalled}
              onClick={handleInstall}
              className="w-full bg-green-600 text-white px-5 py-3 text-lg font-semibold rounded-lg shadow-lg disabled:bg-green-400 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 px-2">
        <h2 className="text-2xl font-semibold mb-4 text-[#001931]">
          User Ratings Distribution
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={ratings}
              margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis
                stroke="#666"
                tickFormatter={(value) => {
                  if (value >= 1000000)
                    return `${(value / 1000000).toFixed(1)}M`;
                  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                  return value;
                }}
              />
              <Tooltip
                cursor={{ fill: "#f5f5f5" }}
                formatter={(value) => value.toLocaleString()}
              />
              <Legend iconType="circle" wrapperStyle={{ paddingTop: 10 }} />
              <Bar
                dataKey="count"
                fill="#7c3aed"
                name="Number of Ratings"
                barSize={40}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-10 px-2">
        <h2 className="text-2xl font-semibold mb-3 text-[#001931]">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
