import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './Login';

function App() {

  return (
    <Router>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>

    </Router>

      
      
   

  )



}

export default App;
