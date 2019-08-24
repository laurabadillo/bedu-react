import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../reducers/images';  
import { Link } from 'react-router-dom';

// Componente tonto / Dumb Components / functional component 
const ListImages = (props) => {
  return (
    <div>
    <h3>This is Images page</h3>
    <img src={props.src} width="500"/> 
    <Link to={`/images/${props.imgid}`}>{props.author}</Link>
    </div> 
  );
};

const Images = () => { 

  const dispatch = useDispatch();
  const imagesReducer = useSelector(store => store.imagesReducer); 

  useEffect(() => {
    dispatch(fetchImages())
  }, []);

  return (
    <div>
      <h3>Images page</h3>
      <div className="card">
        {
          imagesReducer.images.map((image, i) => {
            return (
             <ListImages key={i} className="vertical-flex" src={image.download_url} author={image.author} imgid={image.id}/>
            )
          })
        }
      </div>
    </div>
  ); 
 };

export default Images; 