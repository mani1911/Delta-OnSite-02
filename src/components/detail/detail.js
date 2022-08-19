import React from "react";
import {useNavigate} from 'react-router-dom';
import classes from './detail.module.css';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { BsFillTrashFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
const Detail = (props)=>{
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const name = props.name;
    const password = props.password;

    const deleteHandler = ()=>{
        const details = {userID : props.userID, id : props.id, name : props.name, password : props.password};
        props.deleteHandler(details);
    }

    const editHandler = ()=>{
        navigate('/edit', {state : {id : props.id, name : props.name , password : props.password}})
    }
    return<>
    <div className={classes.wrap}>
        <div className={classes.detail}>
            <div className={classes.name}><span>Title : </span>{props.name}</div>
            <div className={classes.pass}><span>Password : </span>{props.password}</div>
        </div>
        <div className={classes.btn}>
            <BiEditAlt onClick = {editHandler} className = {classes.edit}/>
            <BsFillTrashFill onClick = {deleteHandler} className={classes.del}/>
        </div>

    </div>



    </>
}

export default Detail;