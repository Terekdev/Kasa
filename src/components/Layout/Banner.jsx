import React from 'react';
import { useState } from 'react';

const Banner = (props) => {
    const [setTexte] = useState("");
  
    const handleTexteChange = (event) => {
      setTexte(event.target.value);
    };
  
    return (
      <div className="banner">
        {props.title && <h1 className='banner_title' onChange={handleTexteChange}>{props.title}</h1>}
        <img src={props.src} alt='banniere-kasa' className='banner_img' />
      </div>
    );
  };

export default Banner;
  