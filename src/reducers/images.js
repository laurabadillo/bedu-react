
const FETCH_IMAGES = 'my-app/images/FETCH_IMAGES';

const defaultState = {
  images: []
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCH_IMAGES':
      return {...state,images: action.images};
    default: 
      return state;
  }
}; 

export const salvarImagenes = (images) => {
  return {
    type: 'FETCH_IMAGES', 
    images 
  };
};

export const fetchImages = () => {

  return (dispatch) => {
    return fetch('https://picsum.photos/v2/list?page=2&limit=6')
    .then(data => data.json())
    .then(images => dispatch(salvarImagenes(images)) );  
  };
};