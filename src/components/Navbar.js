
// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-r from-[#000000] to-[#000000aa] h-screen w-40 positon-absolute">
      <div className="col-auto  gap-x-120 pl-3">
        <div className="pt-5 text-[#7b2323] text-2xl font-bold ">LookAtMe
        </div>
        <div className='mt-20 col pb-10'>
        <ul className="col space-y-6">
          <li><NavLink to = "/" style={({ isActive }) => ({
                                color: isActive
                                    ? "red"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323]">Home</NavLink></li>
           <li><NavLink to="/browse" style={({ isActive }) => ({
                                color: isActive
                                    ? "red"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Browse</NavLink></li>
          <li>
            <NavLink to ="/trending"  style={({ isActive }) => ({
                                color: isActive
                                    ? "red"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] ">Trending</NavLink></li>
          <li><NavLink to="/popular" style={({ isActive }) => ({
                                color: isActive
                                    ? "red"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Popular</NavLink></li>
          <li><NavLink to="/toprated" style={({ isActive }) => ({
                                color: isActive
                                    ? "red"
                                    : "white",
                            })}  className="text-white hover:text-[#7b2323] a:text-[#90d36f]">Top rated</NavLink></li>
          {/* <Link to = "home" className="text-white hover:text-[#7b2323]">Home</Link> */}
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
