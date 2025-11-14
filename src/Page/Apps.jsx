import React, { useState } from "react";
import AppsCard from "../components/AppsCard.jsx"; 
import { Link, useLoaderData } from "react-router";
import Cardload from "../components/CardLoad.jsx";
; 

const Apps = () => {
 
  const allApps = useLoaderData();
  
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();

 
  const searchedApps = term
    ? (Array.isArray(allApps) ? allApps : []).filter((appData) =>
        appData.title.toLocaleLowerCase().includes(term)
      )
    : (Array.isArray(allApps) ? allApps : []); 

 

  return (
    <div>
    
      {!Array.isArray(allApps) || allApps.length === 0 ? (
        <Cardload count={16} />
      ) : (
        <div>
          <div className="text-center items-center">
            <h1 className="text-3xl font-bold">Our All Applications</h1>
            <p className="text-gray-500 pt-2">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center  justify-between mb-5 max-w-screen-2xl w-full px-4 md:px-6 lg:px-8 mx-auto">
            <h1 className="text-xl font-semibold">
              ({searchedApps.length}) Apps Found
            </h1>
            <label className="input">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="🔍 Search"
              />
            </label>
          </div>
          {searchedApps.length === 0 ? (
            <div className="flex justify-center items-center w-full mx-auto">
              <img src="https://i.ibb.co.com/dYjZ1vk/App-Error.png" alt="" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-screen-2xl w-full px-4 md:px-6 lg:px-8 mx-auto">
              {searchedApps.map((app) => (
                <AppsCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;