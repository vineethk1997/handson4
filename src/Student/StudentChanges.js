import React, { useState,useContext } from 'react';
import StudentContext from "./StudentContext";
import { useNavigate, useParams } from "react-router-dom";
import './Student.css';

const StudentChanges = () => {
  
  
  
  const navigate = useNavigate();
  const {id} = useParams();
  let [student] = useContext(StudentContext);

  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [course, setCourse] = useState("");
  let [batch, setBatch] = useState("");
  
  console.log(student);

  
  
  
  
  
  
  
  
  
  const submitHandler = () =>{

  }
  
  
  const backHandler = () => {
    navigate(`/student`);
  }
  
  
  return (
    <div className='box-collection'>
        <input placeholder='name' type="text" className='name'/>
        <input placeholder='age' type="age" className='age'/>
        <input placeholder='course' type="text" className='course'/>
        <input placeholder='batch' type="text" className='batch'/>
        <button onClick={submitHandler} className="button_sub">Submit</button>
        <button onClick={backHandler} className="button_back">Go Back</button>
    </div>
  )
}

export default StudentChanges