import React, { useEffect, useState } from 'react'

const Functionalcomponet = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log('Component is Mounted');
        return () =>{
            console.log('Component will unMount');
        }
    },[])
    useEffect(()=>{
        if (count > 0){
            console.log('Component is updated');
        }
    },[count])
    console.log('Rendering the object');
  return (
    <div>
        <h2>Functional Componet life Cycle</h2>
        <h3>You Clicked {count}</h3>
      <button onClick={()=>setCount(count+1)}> + 1 </button>
    </div>
  )
}

export default Functionalcomponet
