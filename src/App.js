import React from "react";
import Home from "./Component/Home";
import './App.css';
import Student from "./Component/Student";
import Contact from './Component/Contact';
import Navigation from "./Component/Navigation";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
     <Router>
    <Navigation/>
    <Routes>
  
    {/* <Route path= "/" element= {<Home/>}/> */}
    <Route path="/home"  element={<Home/>}/>
    <Route path="/student" element={<Student/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    </Router> 
  );
}

export default App;
