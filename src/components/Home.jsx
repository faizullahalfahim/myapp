import React from "react";
import { Link, useLoaderData } from "react-router";

import Cardload from "./CardLoad.jsx";
import AppsCard from "./AppsCard.jsx";
import Banner from "./Banner.jsx";

const Home = () => {
  const allApps = useLoaderData();

  const featuredApps = (Array.isArray(allApps) ? allApps : []).slice(0, 8);

  return (
    <div>
      <Banner> </Banner>

      <div className="text-center items-center py-8">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {featuredApps.length === 0 ? (
        <Cardload />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-screen-2xl w-full px-4 md:px-6 lg:px-8 mx-auto">
          {featuredApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      )}

      <div className="items-center text-center py-7">
        <Link
          to="/apps"
          className="btn text-lg p-6 bg-gradient-to-r text-white from-blue-400 to-purple-600 hover:scale-105"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
