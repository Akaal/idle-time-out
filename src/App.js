import logo from './logo.svg';
import './App.css';
import IdleTimeOutHandler from './IdleTimeOutHandler'
import { useState } from 'react';
function App() {

  const[isActive,setIsActive]=useState(true)

  return (
    <div className="App">
      <IdleTimeOutHandler onActive={()=>{setIsActive(true)}} onIdle={()=>{setIsActive(false)}}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isActive?'Hello There':'Interact to be active'}
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
