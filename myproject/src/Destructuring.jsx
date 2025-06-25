import React from 'react'
import Destructingsnd from './Practise/Destructingsnd'



function Destructuring() {
    const myCar = {
    model: "BMW",
    year: 2025,
    dealer: "Nixon",
    color: "red"
    }
  return (
    <div>
      <Destructingsnd myCar={myCar}/>
    </div>
  )
}

export default Destructuring
