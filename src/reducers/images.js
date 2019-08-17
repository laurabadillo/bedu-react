const defaultState = {
  images: []
};

const imagesReducer = (state =[], action) => {
  switch(action.type) {
    case 'SAVE_IMAGES':
      return {...state,images: action.images};
    default: 
      return state;
  }
}; 

export default imagesReducer;