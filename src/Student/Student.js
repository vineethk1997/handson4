import React,{useContext} from "react";
import './Student.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentContext from "./StudentContext";
import { useNavigate,Link } from "react-router-dom";





function Student() {
  
 let [student] = useContext(StudentContext);
 let navigate = useNavigate();
 
 const addHandler = () => {
  navigate(`/student-changes`);
};


  // const rows = [{id:'1',name:'Froze',age: '19', course: 'MERN',batch: 'November'},
  //   {id:'2',name:'Sroze',age: '19', course: 'MERN',batch: 'October'},
  //   {id:'3',name:'Groze',age: '29', course: 'MERN',batch: 'October'},
  //   {id:'4',name:'Yroze',age: '18', course: 'MERN',batch: 'November'},
  //   {id:'5',name:'Nroze',age: '10', course: 'MERN',batch: 'October'},]

  return (
    <>
    <div className="Student">
    <h1 className="student-list">Student List</h1>
    {/* <h1>Hello</h1> */}
    <button className="submit" onClick={addHandler}>Add</button>
    </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        
          <TableCell >Name</TableCell>
          <TableCell align="right">age</TableCell>
          <TableCell align="right">course&nbsp;(g)</TableCell>
          <TableCell align="right">batch&nbsp;(g)</TableCell>
          <TableCell align="right">change&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {student.map((row) => (    
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
           
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.age}</TableCell>
            <TableCell align="right">{row.course}</TableCell>
            <TableCell align="right">{row.batch}</TableCell>
            <TableCell align="right"><Link to={`/student-desc/${row.id}`}>Edit</Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  
  

  );
}
 

export default Student;