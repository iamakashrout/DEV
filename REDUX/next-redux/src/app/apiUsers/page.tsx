'use client'
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";
import { useEffect } from "react";

export default function Page(){
    const dispatch=useDispatch<AppDispatch>();

    const apiUserData = useSelector((data : RootState)=>data.userData.userApiData);
    useEffect(()=>{
        dispatch(fetchApiUsers());
    }, []);

    return (
        <div>
            <h1>User List from API</h1>
            <button onClick={()=>dispatch(fetchApiUsers())}>Load Users</button>
            {
                apiUserData.length && apiUserData.map((item: any)=>(
                    <h4 key={item.id}>{item.name}</h4>
                ))
            }
        </div>
    )
}