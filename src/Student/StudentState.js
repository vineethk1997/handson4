import React, { useState } from 'react';
import StudentContext from './StudentContext';
import { v4 as uuidv4 } from 'uuid';


const StudentState = (props) => {



 let[student, setStudent ] = useState([{id:uuidv4(),name:'Froze',age: '19', course: 'MERN',batch: 'November'},
 {id:uuidv4(),name:'Sroze',age: '19', course: 'MERN',batch: 'October'},
 {id:uuidv4(),name:'Groze',age: '29', course: 'MERN',batch: 'October'},
 {id:uuidv4(),name:'Yroze',age: '18', course: 'MERN',batch: 'November'},
 {id:uuidv4(),name:'Nroze',age: '10', course: 'MERN',batch: 'October'}]);
  return (
    <StudentContext.Provider value={[student, setStudent]}>
        {props.children}
    </StudentContext.Provider>
  )
}

export default StudentState