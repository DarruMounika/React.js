import React from 'react';


const Filtermethod = () => {
    const numbers = [10,21,33,40,50];
    const even = numbers.filter(num => num % 2===0);
    return (
        <div>
            <h2>Filter Method</h2>
            <ul>
                {even.map((num,i)=>(
                    <li key={i}>{num}</li>
                ))}
            </ul>
        </div>
    )
}
export default Filtermethod


