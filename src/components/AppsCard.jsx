import React from "react";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  console.log(app);
  return (
    <div className="">
      <Link to={`/app/${id}`}>
        <div className="p-5 bg-white rounded-md shadow-lg hover:scale-103 transition ease-in-out">
          <img className="h-70 overflow-x-hidden w-full" src={image} alt="" />
          <h2 className="text-2xl font-semibold mt-3  border-t-1 border-gray-200 ">
            {title}
          </h2>
          <div className="flex justify-between pt-4">
            <div className="flex bg-gray-200 p-2 rounded-md">
              <img
                className="h-5"
                src="https://i.ibb.co.com/PZdhgvdd/icon-downloads.png"
                alt=""
              />
              <p className="text-green-500">{downloads}</p>
            </div>
            <div className="flex bg-orange-100 p-2 rounded-md">
              <img
                className="h-5"
                src="https://i.ibb.co.com/JF8WBnVs/icon-ratings.png"
                alt=""
              />
              <p className="text-orange-500">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppsCard;
