import React from 'react';
import './styles/App.css';
import Navbar from './Navbar'
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router className="App-router"/>
    </div>
  );
}

export default App;
