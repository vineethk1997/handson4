import React from "react";
import './Navigation.css';
import {Link} from 'react-router-dom';


function Navigation() {

  return (
      <nav>
        
    
        <ul className="nav-links">
           <Link to='/home'>Home</Link>
           <Link to='/student'>Student</Link>
           <Link to='/contact'> Contact</Link>
        </ul>
        
        </nav>
  );
}

export default Navigation;