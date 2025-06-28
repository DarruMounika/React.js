import React, { useState } from 'react'

const Practiseusestate = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h2>Practise of useState</h2>
      <h3>You have clicked {count} times !!</h3>
      <button onClick={()=>{setCount(count + 1)}}>Click Me </button>
    </div>
  )
}

export default Practiseusestate
