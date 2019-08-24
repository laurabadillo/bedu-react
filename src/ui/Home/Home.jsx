import React from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement } from '../../reducers/counter';

// Componente tonto / Dumb Components / functional component 
const Home = () => {

  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>This is Home Page {counter}</h3>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
};

export default Home;