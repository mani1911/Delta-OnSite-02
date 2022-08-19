import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import classes from './header.module.css';
import Logout from "../auth/logout";
const Header = ()=>{
    const user = useSelector(selectUser);
    return <nav className={classes.nav}>
    <Link to = "/" className = {classes["site-title"]}>Cred Manager</Link>
    <ul>
        <li>
            {!user.loggedIn? <Link to = "/login">Login</Link> : <Logout/>}
            
        </li>
        
    </ul>
    </nav>
}

export default Header;