import React from 'react'
import { useState,useEffect } from 'react'

function Statemang() {
    // const [Count,setCount] = useState(0)

    const [City,setCity] = useState("Hyderabad")
    useEffect (()=>{
    if (City==="Hyderabad"){
        setCity("Bangalore")
    }else{
        setCity("Goa")
    }
    },[])
   
    console.log(City)

  return (
    // <div>
    //   <p>Count: {Count}</p>
    //   <button onClick={() => setCount(Count+1)}>Increase</button>
    //   <button onClick={()=> setCount(Count-1)}>Decrease</button>
    // </div>
    <p>{City}</p>
  )
}

export default Statemang
