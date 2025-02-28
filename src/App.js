import React from 'react';
import logo from './logo.svg';
import './App.css';
import Functional from './Functional';
import Class from './Class';
import Jsx from './Jsx';
import State from './State';
import Update from './Update';
import State1 from './State1';
function App() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />  
     <h1>Hello React App !</h1>
     <Functional />
     <Class />  
     <Jsx />  
     <Update />
     <State />
     <State1 />
     </header>
    </div>
  );
}

export default App;
