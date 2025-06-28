import React ,{useMemo}from 'react'

function Practiseusememo({num}) {
    const expensiveValue = useMemo(()=>{
        console.log("Calculating...");
        return num*2;
    },[num]);

  return (
    <div>
        <h2>Practise of useMemo</h2>
        <h4>Result:{expensiveValue}</h4>
    </div>
  )
}

export default Practiseusememo
