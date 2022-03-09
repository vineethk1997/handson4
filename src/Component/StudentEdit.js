import React,{useState, createContext} from 'react';



 export const StudentList = createContext();
 
 export const StudentEdit = (props) => {

  const[student,setStudent]=useState([{id:'1',name:'Froze',age: '19', course: 'MERN',batch: 'November'},
  {id:'2',name:'Sroze',age: '19', course: 'MERN',batch: 'October'},
  {id:'3',name:'Groze',age: '29', course: 'MERN',batch: 'October'},
  {id:'4',name:'Yroze',age: '18', course: 'MERN',batch: 'November'},
  {id:'5',name:'Nroze',age: '10', course: 'MERN',batch: 'October'},
]);
  return (
    <StudentList.Provider value={[student,setStudent]}>
       {props.children}
    </StudentList.Provider>
  )
}

