import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux/es/exports";
import { selectUser } from "./features/userSlice";
import home from './home.module.css';
import DetailList from "./detailList";
const Home = ()=>{
    const user = useSelector(selectUser);
    return <div className={home.wrapper}>
        {user.loggedIn? <h2>{`Welcome Back, ${user.name}`}</h2>:<p></p>}
        <div className={home.profiles}>

            {!user.loggedIn?'Login to See your Stored Credentials':<DetailList userID = {user._id}/>}
        </div>

        
    </div>
}

export default Home;