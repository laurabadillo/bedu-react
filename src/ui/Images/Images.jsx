import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { salvarImagenes } from '../../actions/images'; 
import { Link } from 'react-router-dom';

// Componente tonto / Dumb Components / functional component 
const ListImages = (props) => {
  return (
    <div>
    <h3>This is Images page</h3>
    <img src={props.src}/> 
    <Link to={`/images/${props.imgid}`}>{props.author}</Link>
    </div> 
  );
};

const Images = () => {
  const dispatch = useDispatch();
  const imagesReducer = useSelector(store => store.imagesReducer); 
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=6')
    .then(data => data.json())
    .then(images => dispatch(salvarImagenes(images)) );
  }, []);

  return (
    <div className="App"> 

      {images.map((image, i) => {
        return (
          <ListImages key={i} src={image.download_url} author={image.author} imgid={image.id}/>
        );
      })}
    </div>
  );
};


export default Images; 