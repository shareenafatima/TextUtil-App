import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <div>
        <Navbar title="TextUtils" />
    
        <Routes>
          <Route exact path="/">
            <Form heading="Enter your text here" /> 
          </Route>
          <Route exact path="about /">
            <About/>
          </Route>
        </Routes>
        
        </div>
      </Router>
      </>
  );
}

export default App;
