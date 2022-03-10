import React, { useState } from 'react';
import StudentContext from './StudentContext';


const StudentState = (props) => {



 let[student, setStudent ] = useState([{id:'1',name:'Froze',age: '19', course: 'MERN',batch: 'November'},
 {id:'2',name:'Sroze',age: '19', course: 'MERN',batch: 'October'},
 {id:'3',name:'Groze',age: '29', course: 'MERN',batch: 'October'},
 {id:'4',name:'Yroze',age: '18', course: 'MERN',batch: 'November'},
 {id:'5',name:'Nroze',age: '10', course: 'MERN',batch: 'October'}]);
  return (
    <StudentContext.Provider value={[student, setStudent]}>
        {props.children}
    </StudentContext.Provider>
  )
}

export default StudentState