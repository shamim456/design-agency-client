import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Image_Icon/Group 33069.png";

const NavBar = () => {
  const menuOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li to="/about">
        <Link>About Us</Link>
      </li>
      <li to="projects">
        <Link>Projects</Link>
      </li>
      <li to="contact">
        <Link>Contact</Link>
      </li>
      <li to="admin">
        <Link>Admin</Link>
      </li>
    </>
  );

  return (
    // responsive menu
    <div className="navbar bg-base-100 font-medium">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuOption}
          </ul>
        </div>
        <Link>
          <img className="w-20 h-9" src={logo} alt="logo" />
        </Link>
      </div>

      {/* full menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuOption}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
