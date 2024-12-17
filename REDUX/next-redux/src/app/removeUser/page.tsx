'use client'
import { useDispatch, useSelector } from "react-redux"
import { InitialState, removeUser } from "../redux/slice";
import { RootState } from "../redux/store";

export default function Page() {

    const userData = useSelector((data: RootState)=>data.userData.users);
    console.log(userData);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Remove User Page</h1>
            {
                userData.map((item)=>(
                          <div>
                            <span>{item.name}</span>
                            <button onClick={()=>dispatch(removeUser(item.id))}>Remove</button>
                          </div>
                        ))
            }
        </div>
    )
}