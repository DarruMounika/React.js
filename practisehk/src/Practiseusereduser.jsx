import React, { useReducer } from 'react'

function reducer(state,action){
    switch (action.type){
        case 'increment':
            return {count:state.count + 1}
        case 'decrement':
            return {count:state.count - 1}
        default:
            return state;
    }
}

function Practiseusereduser() {
    const [state,dispatch] = useReducer(reducer,{count:0});
  return (
    <div>
        <h2>Practise of useReducer</h2>
        <h4>{state.count}</h4>
        <button onClick={()=>dispatch({type:'increment'})}> + 1 </button>
        <button onClick={()=>dispatch({type:'decrement'})}> - 1 </button>
    </div>
  )
}

export default Practiseusereduser

