import { useState } from "react";
import React from "react";
import "../../index.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  let [Isopen, SetIsopen] = useState(false);

  return (
    <>
      <nav className=" bg-green-50 sticky top-0 z-100">
        <ul className="grid grid-flow-col items-center px-4 py-2">
          {/* Logo */}
          <li>
            <img
              src={logo}
              alt="logo"
              className={`w-[50px] ml-2 ${Isopen ? "hidden" : ""}`}
            />
          </li>

          {/* Center nav links */}
          <li>
            <div
              className={`${
                Isopen ? "flex" : "hidden"
              } flex-col items-start px-4 pb-2 min-[630px]:flex min-[630px]:flex-row min-[630px]:justify-center`}
            >
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  ` p-[14px] max-md:px-[10px] font-semibold text-[18px] hover:cursor-pointer hover:translate-[-3px] hover:duration-300 hover:ease-in-out
                 ${isActive ? `text-green-700` : ``}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  ` p-[14px] max-md:px-[10px] font-semibold text-[18px] hover:cursor-pointer hover:translate-[-3px] hover:duration-300 hover:ease-in-out
                 ${isActive ? `text-green-700` : ``}`
                }
              >
                Our Doctors
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  ` p-[14px] max-md:px-[10px] font-semibold text-[18px] hover:cursor-pointer hover:translate-[-3px] hover:duration-300 hover:ease-in-out
                 ${isActive ? `text-green-700` : ``}`
                }
              >
                Our Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` p-[14px] max-md:px-[10px] font-semibold text-[18px] hover:cursor-pointer hover:translate-[-3px] hover:duration-300 hover:ease-in-out
                 ${isActive ? `text-green-700` : ``}`
                }
              >
                Contact us
              </NavLink>
            </div>
          </li>
          <div
            onClick={() => SetIsopen(!Isopen)}
            className={`w-[40px] h-[40px] bg-green-500 flex flex-col gap-2 py-1.5 px-1.5 rounded-sm min-[630px]:hidden ${
              Isopen ? "absolute top-0 right-0 bg-red-600" : ""
            }`}
          >
            <div className="w-full rounded-sm h-1 border-2 border-white"></div>
            <div className="w-full rounded-sm h-1 border-2 border-white"></div>
            <div className="w-full rounded-sm h-1 border-2 border-white"></div>
          </div>
          {/* Login Button */}
          <li className="flex justify-end">
            <Link
              to="/"
              className={`font-semibold text-white text-xl px-[10px] py-[5px] rounded-[20px] border border-red-600 bg-red-600 cursor-pointer hover:bg-white hover:text-red-600 ${
                Isopen ? "hidden" : ""
              }`}
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
