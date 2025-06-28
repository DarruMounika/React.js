import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Practiseusestate from './Practiseusestate';
import Practiseuseeffect from './Practiseuseeffect';
import Practiseusecontext from './Practiseusecontext';
import UserContext from './UserContext';
import Practiseuserref from './Practiseuseref';
import Practiseusereduser from './Practiseusereduser';
import Practiseusememo from './Practiseusememo';


function App() {
  const [input,setInput] = useState('');
  const [num,setNum] = useState(0);
  const handelSubmit =(e)=>{
    e.preventDefault();
    setNum(Number(input));
  }
  return (
    <div>
      <Practiseusestate/>
      <Practiseuseeffect/>
      <UserContext.Provider value="Mounika">
    <Practiseusecontext/>
    </UserContext.Provider>
    <Practiseuserref/>
    <Practiseusereduser/>

    <form onSubmit={handelSubmit}>
      <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    <Practiseusememo num={num}/>
    </div>
  );
}

export default App;
