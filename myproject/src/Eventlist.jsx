import React, { useState,useEffect } from 'react';
import './Eventlist.css';

const Eventlist = () => {
    const[screenSize,setscreenSize] = useState({
        width:window.innerWidth,
        height: window.innerHeight,
    });
    const updateScreenSize = ()=>{
        setscreenSize({
        width:window.innerWidth,
        height: window.innerHeight,
        });
    };

    useEffect(()=>{
        window.addEventListener('Eventlis',updateScreenSize);
        return()=>{
            window.removeEventListener('Eventlist',updateScreenSize);
        }
    },[])
  return (
    <div className='resize'>
      <h1>Screen size example</h1>
      <p>Resize the window to see the Screen Size</p>
      <p>Width:{screenSize.width}</p>
      <p>Height:{screenSize.height}</p>
    </div>
  )
}

export default Eventlist
