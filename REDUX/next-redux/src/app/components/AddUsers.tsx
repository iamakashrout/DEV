'use client';

import React, { useState } from 'react';
import { addUser } from '../redux/slice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const AddUsers: React.FC = () => {
    const [name, setName]=useState("");

    const dispatch = useDispatch();

    const userDispatch=()=>{
        console.log(name);
        dispatch(addUser(name));
    }

  return (
    <div>
      <h3>User List</h3>
      <input type="text" placeholder="Add New User" onChange={(e)=>setName(e.target.value)} />
      <button onClick={userDispatch}>Add User</button>
      <br/>
      <Link href="/removeUser">Remove User Page</Link>
      <br/>
      <Link href="/todoList">To Do Page</Link>
      <br/>
      <Link href="/apiUsers">API Users Page</Link>
    </div>
  );
};

export default AddUsers;
