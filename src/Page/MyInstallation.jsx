import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { toast } from "react-toastify";

const Installation = () => {
  const [installApp, setInstallApp] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveInstall = JSON.parse(localStorage.getItem("install"));
    if (saveInstall) setInstallApp(saveInstall);
  }, []);

  const sortedItems = (() => {
    if (sortOrder === "size-asc") {
      return [...installApp].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-dsc") {
      return [...installApp].sort((a, b) => b.size - a.size);
    } else {
      return installApp;
    }
  })();

  const handleUninstall = (id) => {
    toast("App uninstalled successfully!✔");
    const existingData = JSON.parse(localStorage.getItem("install"));

    let updatedData = existingData.filter((p) => p.id !== id);
    setInstallApp(updatedData);

    localStorage.setItem("install", JSON.stringify(updatedData));
  };

  return (
    <div>
      <div className="text-center items-center">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 my-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between px-7 items-center pt-7">
        <h1>{installApp.length} Apps Found</h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-border"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-dsc">High-&gt;low</option>
          </select>
        </label>
      </div>
      <div className="space-y-4 pb-5">
        {sortedItems.map((p) => (
          <div
            key={p.id}
            className="flex flex-col sm:flex-row sm:items-center bg-white mx-1 md:mx-5 justify-between items-center px-5 rounded-md shadow-xl mt-3"
          >
            <div className="flex space-x-2">
              <div>
                <img className="h-25 py-2" src={p.image} alt="" />
              </div>
              <div className="space-x-2 items-center pt-5">
                <h1>{p.title} </h1>
                <div className="flex space-x-5">
                  <p className="flex items-center ">
                    <MdOutlineFileDownload /> {p.downloads}{" "}
                  </p>
                  <p className="flex items-center">
                    <FaStar />
                    {p.ratingAvg}{" "}
                  </p>
                  <p>{p.size} MB</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleUninstall(p.id)}
                className="btn btn-primary"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;