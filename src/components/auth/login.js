import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {login} from '../features/userSlice';
import {Link} from 'react-router-dom';
import logincss from './login.module.css';
import Modal from '../ui/modal'
const Login = ()=>{
    let navigate = useNavigate();
    let [username, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('');
    let [openModal, setOpenModal] = useState(false);
    let URL = 'http://localhost:3002/user/login';

    const dispatch = useDispatch();

    const submitHandler = async e=>{
        e.preventDefault();
        const res = await axios.post(URL, {username, password});

        if(!username || !password){
            setMessage('Input Fields cannot be Empty');
            setOpenModal(true);
            setUserName('');
            setPassword('');
            return;
        }
        if(res.data.status=== 1){
            dispatch(
                login({
                    ...res.data.user,
                    loggedIn : true,
                })
            );
            navigate('/');
        }
        else{
            setMessage(res.data.message);
            setOpenModal(true);
            setUserName('');
            setPassword('');
        }
    }
    return <div className="body">
    {openModal? <Modal open = {openModal} message = {message} toggleModal = {()=> setOpenModal(false)} /> : null}
    <form onSubmit={submitHandler}>
        <h3>Login Here</h3>

        <label>Username</label>
        <input value ={username} type="text" placeholder="Username" onChange = {e=>setUserName(e.target.value)}/>

        <label>Password</label>
        <input value = {password} type="password" placeholder="Password" onChange = {e=>setPassword(e.target.value)}/>

        <button type = "submit">Log In</button>
        <Link to = "/register"><div className={logincss.link}>Not a User? Register Here</div></Link>
    </form>
    </div>
}

export default Login;