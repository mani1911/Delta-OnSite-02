import React, { useEffect ,useState} from "react";
import axios from 'axios';
import { useSelector } from "react-redux/es/exports";
import { selectUser } from "./features/userSlice";
import Detail from "./detail";

const DetailList = (props)=>{
    const URL = 'http://localhost:3002/detail';
    const user = useSelector(selectUser);
    console.log(user)
    const [detailList, getDetailList] = useState([]);
    const deleteHandler = async(details)=>{
        const res = await axios.delete(`${URL}/delete/${details.id}`);
        const UpdatedArray = detailList.filter(det=> det._id !== details.id)
        getDetailList(UpdatedArray);
    }
    useEffect(()=>{
        async function getDetails(){
            if(user.loggedIn){
                let res = await axios.get(`http://localhost:3002/detail/${user._id}`);
                getDetailList([...res.data.detail]);
            }

        }
        getDetails();
    },[]);

    return<div>
        {detailList.length ===0? <h3>Your Saved Creds Appear Here</h3>:detailList.map(detail => <Detail id = {detail._id} deleteHandler = {deleteHandler} key = {detail._id} userID = {detail.userID} name = {detail.name} password = {detail.password} />)}
    </div>
}

export default DetailList;