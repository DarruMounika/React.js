import React from 'react';
import UserData from './Data';
import './Nestedele.css';

const Nestedele = () => {
  return (
    <div>
      {UserData.map((user)=>(
        <div className='ele'>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.address.street}</div>
        </div>
      ))}
    </div>
  )
}

export default Nestedele
