
const INCREMENT_COUNTER = 'my-app/counter/INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'my-app/counter/DECREMENT_COUNTER';

export default (state = 0, action) => {
  switch(action.type) { 
    case 'INCREMENT_COUNTER':
      return state+1;
    case 'DECREMENT_COUNTER':
      return state-1;
    default: 
    return state;
  }
}

export const increment = () => {
  return {
    type: 'INCREMENT_COUNTER'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT_COUNTER'
  };
};

// module.exports = {
//   increment,
//   decrement
// }