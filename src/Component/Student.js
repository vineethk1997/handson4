import React,{useContext} from "react";
import './Student.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// import {Link} from "react-router-dom";





function Student() {

  // function createData(name, age, course, batch, change) {
  //   return { name, age, course, batch, change };
  // }
  
  // const student = [
  //   createData('Froze', 19, 'MERN', 'October', 'edit'),
  //   createData('Tom', 27,'MERN','October', 'edit'),
  //   createData('Jack', 22, 'MERN', 'October', 'edit'),
  //   createData('Sam', 35, 'MERN', 'October', 'edit'),
  //   createData('Ginger', 36, 'MERN', 'October', 'edit'),
  // ];
  const [student, setStudent] = useContext("StudentList")
  return (
    <>
    <div className="Student">
    <h1 className="student-list">Student List</h1>
    {/* <h1>Hello</h1> */}
    <button className="submit">Submit</button>
    </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
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
            <TableCell align="right">{row.change}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  
  

  );
}
 

export default Student;