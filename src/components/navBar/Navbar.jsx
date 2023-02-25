import React from 'react'
import "./navbar.scss";
import { Link } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import{ MdOutlineDarkMode} from "react-icons/md";
import {AiOutlineAppstore} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";
import {AiOutlineUser} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlineBell} from "react-icons/ai";
import user from '../../constants';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/">
                    <span>FriendBook</span>
                </Link>
                <AiOutlineHome />
                <MdOutlineDarkMode />
                <AiOutlineAppstore />
                <div className="search">
                <FiSearch />
                <input type="text" placeholder="search" />
                </div>
            </div>
            <div className="right">
                <AiOutlineUser />
                <HiOutlineMail />
                <AiOutlineBell />
                <div className="user">
                    <img src={user.img} alt="user" />
                    <span>{user.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
