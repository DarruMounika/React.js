import React, { useContext } from 'react';
import UserContext from './UserContext';



const Practiseusecontext=()=>{
    const user = useContext(UserContext);
    return (
        <div>
            <h2>Practise of useContext</h2>
            <p>Hello, {user}</p>
        </div>
    )
}
export default Practiseusecontext
