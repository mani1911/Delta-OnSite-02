import React, { useState } from "react";
import axios from 'axios';
import regcss from './reg.module.css'
import {useNavigate, Link} from 'react-router-dom';
import Modal from "./ui/modal";


const Register = ()=>{
    const URL = 'http://localhost:3002/user/reg';
    const navigate = useNavigate();
    let [password, setPassword] = useState('');
    let [openModal, setOpenModal] = useState(false);
    let [name, setName] = useState('')
    let [username, setUserName] = useState('');
    let [message, setMessage] = useState('');
    const submitHandler = async e=>{
        e.preventDefault();
        if(!name || !password || !username){
            setMessage('Input Fields cannot be Empty');
            setOpenModal(true);
            setName('');
            setPassword('');
            setUserName('');
            return;
        }
        const res = await axios.post(URL, {name, username, password});
        if(res.data.status === 0){
            setMessage(res.data.message);
            setOpenModal(true);
            setName('');
            setPassword('');
            setUserName('');
        }
        else{   
            navigate('/login');
        }

    }
    return <div className="body">
    {openModal? <Modal open = {openModal} message = {message} toggleModal = {()=> setOpenModal(false)} /> : null}
    <div className={regcss.background}>
    </div>
    <form onSubmit={submitHandler}>
        <h3>Register</h3>

        <label>Username</label>
        <input value ={username} type="text" placeholder="Username" onChange = {e=>setUserName(e.target.value)}/>

        <label>Name</label>
        <input value ={name} type="text" placeholder="Username" onChange = {e=>setName(e.target.value)}/>

        <label>Password</label>
        <input value = {password} type="password" placeholder="Password" id="password" onChange = {e=>setPassword(e.target.value)}/>

        <button type = "submit">Register</button>
    </form>
    </div>
};

export default Register;