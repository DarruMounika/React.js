import React from 'react';
import { useState,useEffect } from 'react';
import './Fetchapi.css';

const userData = "https://jsonplaceholder.typicode.com/posts";

console.log('I am a link ',userData);

const Fetchap = () => {
    const [user, setUser] = useState([]);

    const userHandler = async() => {
        const response = await fetch(userData);
        const newData = await response.json();
        setUser(newData);
    }
    useEffect(()=>{
        userHandler();
    },[])

    console.log(user);

  return (
    <div className='bigdiv'>
        {user.map((item)=>(
            <div key={item.id} className='smalldiv'>
                <h2>{item.title}</h2>
                <h3>{item.body}</h3>
            </div>
        ))}
    </div>
  )
}

export default Fetchap


