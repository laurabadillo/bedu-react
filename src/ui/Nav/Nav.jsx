import React from "react";
import "../../styles/App.css";
import { Link } from 'react-router-dom';
// Componente tonto / Dumb Components / functional component 
const Nav = (props) => {

  return (
    <nav>
    <h3>Logo</h3>
    <ul className="nav-links">
        <Link className="nav-int-links" to="/about">
        <li>About</li>
        </Link>
        <Link className="nav-int-links" to="/images">
        <li>Images</li>
        </Link>
        <Link className="nav-int-links" to="/users">
        <li>Users</li>
        </Link>
    </ul>
    </nav>
    );
};

export default Nav; 