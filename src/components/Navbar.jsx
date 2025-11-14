import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold underline"
                    : "text-gray-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold underline"
                    : "text-gray-600"
                }
              >
                Apps
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold underline"
                    : "text-gray-600"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="h-10 ml-6"
            src="https://i.ibb.co.com/6SNWnN1/logo.png"
            alt=""
          />
          <Link
            to="/"
            className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            HERO.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : "text-gray-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : "text-gray-600"
              }
            >
              Apps
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : "text-gray-600"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/tahmidman20?tab=repositories"
          target="_blank"
          className="btn mr-6 text-white bg-gradient-to-r from-blue-400 to-purple-600 hover:scale-105"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;