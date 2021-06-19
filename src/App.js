import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  var name = {name: "kira", age: 3}
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <p>{name.name}</p>
    </div>
    
  );
}

export default App;
