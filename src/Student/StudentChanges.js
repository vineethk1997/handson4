import React, { useState,useContext } from 'react';
import StudentContext from "./StudentContext";
import { useNavigate} from "react-router-dom";
import './Student.css';
import { v4 as uuidv4 } from 'uuid';

const StudentChanges = () => {
  
  
  
  const navigate = useNavigate();
  // const {id} = useParams();
  let [student,setStudent] = useContext(StudentContext);

  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [course, setCourse] = useState("");
  let [batch, setBatch] = useState("");
  
  console.log(student);
  
  const handleNameChange = (event)=>{
      setName(event.target.value)
  }

  const handleAgeChange = (event)=>{
    setAge(event.target.value)
  }

  const handleCourseChange = (event)=>{
    setCourse(event.target.value)
  }

  const handleBatchChange = (event)=>{
    setBatch(event.target.value)
}

  
  const submitHandler = () =>{
      if(name==="" || age==="" || course==="" || batch===""){
        alert("All the fields are compulsory");
        return
      }
      setStudent([...student,{id:uuidv4(),name:name,age: age, course: course,batch: batch}])
      backHandler();
  }
  
  
  const backHandler = () => {
    navigate(`/student`);
  }
  
  
  return (
    <div className='box-collection'>
        <input placeholder='name' type="text" className='name' value={name} onChange={handleNameChange}/>
        <input placeholder='age' type="age" className='age' value={age} onChange={handleAgeChange}/>
        <input placeholder='course' type="text" className='course' value={course} onChange={handleCourseChange}/>
        <input placeholder='batch' type="text" className='batch' value={batch} onChange={handleBatchChange}/>
        <button onClick={submitHandler} className="button_sub">Submit</button>
        <button onClick={backHandler} className="button_back">Go Back</button>
    </div>
  )
}

export default StudentChanges