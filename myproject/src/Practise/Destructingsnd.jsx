import React from 'react'

const Destructingsnd = ({myCar}) => {
    const {model, year, dealer, color } = myCar
  return (
    <div>
        <h3>{model}</h3>
        <h3>{year}</h3>
        <h3>{dealer}</h3>
        <h3>{color}</h3>
    </div>
  )
}

export default Destructingsnd
