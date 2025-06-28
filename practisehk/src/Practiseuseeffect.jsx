import React, { useEffect, useState } from 'react'

const Practiseuseeffect = () => {
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(()=>{setCount((count)=>{
            if (count == 30){
                clearInterval(interval);
                return count
            }
            return count+1
        });
        },1000);
        return () => clearInterval(interval);
    },[]);

  return (
    <div>
      <h2>Practise of useEffect</h2>
      <h3>Time passed {count} seconds </h3>
    </div>
  )
}

export default Practiseuseeffect
