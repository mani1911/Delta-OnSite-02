import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux/es/exports";
import { selectUser } from "./features/userSlice";
import home from './home.module.css';
import DetailList from "./detailList";
import { BiCommentAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const addCommentHandler = ()=>{
        navigate('/add', {state : {userID : user._id}})
    }
    return <div className={home.wrapper}>
        {user.loggedIn? <h1>Welcome Back, <span className={home.name}>{`${user.name}`}</span></h1>:<p></p>}
        <div className={home.profiles}>

            {!user.loggedIn?<h3>Login to See your Stored Credentials</h3>:<DetailList userID = {user._id}/>}
        </div>
        {user._id?<button className = {home.addBtn} onClick = {addCommentHandler} >Add Cred<BiCommentAdd className={home.icon}/></button>:null}


        
    </div>
}

export default Home;