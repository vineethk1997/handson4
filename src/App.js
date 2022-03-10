import React from "react";
import Home from "./Component/Home";
import './App.css';
import Student from "./Student/Student";
import Contact from './Component/Contact';
import Navigation from "./Component/Navigation";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StudentState from "./Student/StudentState";
import StudentChanges from "./Student/StudentChanges";



function App() {
  return (
    <>
    <StudentState>
    <Router>
    <Navigation/>
    <Routes>
  
    {/* <Route path= "/" element= {<Home/>}/> */}
    <Route path="/home"  element={<Home/>}/>
    <Route path="/student" element={<Student/>} />
    <Route path="/student-changes" element={<StudentChanges/>} />
    <Route path="/student-changes/:id" element={<StudentChanges/>} />
    
  

    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    </Router> 
    </StudentState>
    </>
  );
  
}

export default App;
