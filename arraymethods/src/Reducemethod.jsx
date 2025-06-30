import React from 'react'

const Scores = [10,20,30]
const Reducemethod = () => {
    const total = Scores.reduce((sum,Score)=>sum+Score,0);
  return (
    <div>
      <h2>Reduce Method</h2>
      <h3>Total Score: {total}</h3>
    </div>
  )
}

export default Reducemethod
