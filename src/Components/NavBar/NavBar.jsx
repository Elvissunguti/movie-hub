import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { createImageFromInitials } from "../Utils/getInitials";
import { getRandomColor } from "../Utils/getRandomColor";
import { logout } from "../Assets/Redux/Slices/UserSlice";


const NavBar = () => {

    const user = useSelector((state) => state?.user.user);
  const dispatch = useDispatch();


    const Logout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) return dispatch(logout());
      };

    const navLinks = [
        {name: "Home"},
        {name: "About"},
        {name: "Contacts"}
    ];

    return (
       <div className="mx-auto flex justify-center items-center max-w-4xl xl:max-w-6xl">
        <Link>
        <img src={logo} alt="logo" className="h-20 w-auto"/>
        </Link>
        <div className="flex flex-row items-center space-x-16">
            <ul className="hidden items-center flex-row md:flex">
                {navLinks.map((navLink, i) => (
                    <li key={i}
                     className="p-4 text-lg font-semibold hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54] ">
                        <Link to={navLink.name === "Home"
                     ? `/`
                     : `${
                        navLink.name.charAt(0).toLowerCase() +
                        navLink.name.slice(1)
                     }`}>
                        {navLink.name}
                        </Link>
                    </li>
                ))}
  
            </ul>
        </div>
       </div>
    )
}
export default NavBar;