import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
function App() {
  return (
    <div>
      {/* <h2>Simple React Browser Router</h2> */}

      {/* <h2>React HashRouter</h2> */}

      <h2>React MemoryRouter</h2>
      <nav>
        <Link to='/'>Home</Link>|{' '}
        <Link to='about/'>About</Link>
      </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
    </Routes>

    </div>
  );
}

export default App;
