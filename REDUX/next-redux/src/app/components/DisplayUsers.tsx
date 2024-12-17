'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState, removeUser } from '../redux/slice';
import { RootState } from '../redux/store';

const DisplayUsers: React.FC = () => {
  
  const userData = useSelector((data: RootState)=>data.userData.users);
  console.log(userData);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>User List</h3>
      {
        userData.map((item)=>(
          <div>
            <span>{item.name}</span>
            <button onClick={()=>dispatch(removeUser(item.id))}>Remove</button>
          </div>
        ))
      }
    </div>
  );
};

export default DisplayUsers;
