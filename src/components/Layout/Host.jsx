import React from 'react';
import {useParams } from 'react-router-dom';
import housings from '../../API/logements.json';

const Host = () => {
    const { id } = useParams()
    const housing = housings.find(housing => housing.id === id)
    
    return(
        <div className='house_page_header_hoster_host'>
        <p className='house_page_header_hoster_host_name'>{housing.host.name}</p>
        <img src={housing.host.picture} alt='host-cover' className='house_page_header_hoster_host_img'/>
        </div>
    )
}

export default Host