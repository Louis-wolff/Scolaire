import Message from './message.js';
import React, { useState } from 'react';
import Toggle from './toggle.js';
import Count from './count.js';
import Box from './box.js';
import Clock from './clock.js';

function App() {
  const [nbON,setNbON] = useState(0);

  const handleClick = (v) =>{
    if (v) {
        setNbON(nbON+1);
    }
  };

  return <span>
    <Message msg="Bonjour" />
    <Message msg="On peux écrire ce que l'on veux!" />
    <Toggle onChange={handleClick}/>
    <Message msg={`Nombre de fois ON => ${nbON}`} />
    <Count />
    <Box>
      <h4>Un élément dans une box.</h4>
      <p>Un autre.</p>
    </Box>
    <Clock />

  </span>;
}

export default App;












/*import logo from './logo.svg';
import './App.css';

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>*/