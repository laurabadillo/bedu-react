import { combineReducers } from 'redux';
import counterReducer from './counter'; 
import imagesReducer from './images';

const allReducers = combineReducers({
  counterReducer,
  imagesReducer
});

export default allReducers; 