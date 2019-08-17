import React from "react";
import { useDispath, useSelector } from 'react-redux'; 
import { increment, decrement } from '../../actions/counter';

// Componente tonto / Dumb Components / functional component 
const Home = (props) => {

  return (
    <h3>This is Home page</h3>
  );
};

export default Home; 
