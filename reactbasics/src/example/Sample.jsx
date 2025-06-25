import React from 'react'

const Mango=() =>{
    return(
        <h2>Mangoes are king of the Fruits</h2>
    )
}
const Banana=() =>{
    return(
        <h3>Bananas are very sweet </h3>
    )
}
const Grapes = ()=>{
    return (
        <h3>Grapes are small and sweet</h3>
    )
}

function Sample() {
  return (
    <div>
      <h1>This is a Sample Component</h1>
      <Mango/>
      <Banana/>
      <Grapes/>
    </div>
  )
}

export default Sample
