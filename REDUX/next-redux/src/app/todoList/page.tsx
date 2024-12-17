"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { RootState } from "../redux/store";

export default function Page(){
    const [todo, setTodo] = useState("");
    const todoData = useSelector((data: RootState)=> data.todoData.todos);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Add To Do</h3>
            <input type="text" placeholder="Add new task" onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={()=>dispatch(addTodo(todo))}>Add To Do</button>
            <br/>
            <h4>To Do List</h4>
            {
                todoData.length && todoData.map((item)=>(
                    <h6>{item.name}</h6>
                ))
            }
        </div>
    )
}