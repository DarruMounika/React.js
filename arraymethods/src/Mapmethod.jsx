import React from 'react';

const Array = ['Alice','Bob','Charlie']
const Mapmethod = () =>{
    return (
        <div>
            <h2>Map Method</h2>
            <ol>
            {Array.map((arr,item)=><li key={item}>{arr}</li>)}
            </ol>
        </div>
    )
}
export default Mapmethod