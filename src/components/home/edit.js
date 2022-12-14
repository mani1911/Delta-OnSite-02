import React, { useState } from "react";
import axios from 'axios';
import regcss from '../auth/reg.module.css'
import {useNavigate} from 'react-router-dom';
import Modal from '../ui/modal';
import { useLocation } from 'react-router-dom';


const Edit = ()=>{
    const {state} = useLocation();

    const navigate = useNavigate();
    let [name, setName] = useState(state.name);
    let [password, setPassword] = useState(state.password);
    let [message, setMessage] = useState('');
    let [openModal, setOpenModal] = useState(false);



    let URL = `http://localhost:3002/detail/edit/${state.id}`;
    const submitHandler = async e=>{
        e.preventDefault();
        if(!name || !password){
          setMessage('Cannot Submit Empty Input')
          setOpenModal(true);
          return;
        }
        else{
            await axios.patch(URL, {name, password})
            navigate('/');
        }

    }
    return <div className="body">
    {openModal? <Modal open = {openModal} message = {message} toggleModal = {()=> setOpenModal(false)} /> : null}
    <div className={regcss.background}>
    </div>
    <form onSubmit={submitHandler}>
        <h3>Edit Credential</h3>

        <label>Title</label>
        <input value ={name} type="text" placeholder="Title" onChange = {e=>setName(e.target.value)}/>

        <label>Password</label>
        <input value ={password} type="text" placeholder="Password" onChange = {e=>setPassword(e.target.value)}/>

        <button type = "submit">Save</button>
        <button onClick={()=>{navigate('/')}}>Cancel</button>
    </form>
    </div>
};

export default Edit;