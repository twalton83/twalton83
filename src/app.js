import React from 'react';
import './styles/App.css';
import Navbar from './Navbar'
import Router from './Router';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
        <Navbar/>
      
    
    <Container>
    <Router className="App-router"/>
    </Container>
      

     
    </div>
  );
}

export default App;
