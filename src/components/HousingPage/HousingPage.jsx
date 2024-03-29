import React from 'react';
import {useParams, Route, Routes  } from 'react-router-dom';
import housings from '../../API/logements.json';
import Collapse from '../Layout/Collapse';
import Gallery from '../Layout/Slides';
import RatingScale from './RatingScale';
import Error404 from '../NoMatch/Error404';

const HousingPage = () => {

    const { id } = useParams()
    const housing = housings.find(housing => housing.id === id)
    if (housing === undefined) { 
        return  <Routes>
            <Route path="*" element={<Error404/>}/> 
            </Routes>
    }



    return (
        <section key={housing.id} className='house_page'>
            <Gallery 
                img={housing.pictures} 
            />

            <header className='house_page_header'>
                <article className='house_page_header_host'>
                    <h1 className='house_page_header_host_title'>{housing.title}</h1>
                    <h2 className='house_page_header_host_subtitle'>{housing.location}</h2>
                    <div className='house_page_header_host_tags'>
                        {housing.tags.map((tag, i) => (
                            <p key={i} className='house_page_header_host_tags_tag'>{tag}</p>
                        ))}
                    </div>
                </article>
            
                <article className='house_page_header_hoster'>
                <div className='house_page_header_hoster_host'>
                <p className='house_page_header_hoster_host_name'>{housing.host.name}</p>
                <img src={housing.host.picture} alt='host-cover' className='house_page_header_hoster_host_img'/>
                </div>
                    <RatingScale
                        scaleValue={housing.rating}
                    />
                </article>
            </header>

            <article className='house_page_dropdown'>
                <div className='house_page_dropdown_content'>
                    <Collapse
                        title='Description'
                        content={housing.description}
                    />
                </div>
                <div className='house_page_dropdown_content'>
                    <Collapse
                        title='Équipements'
                        content={housing.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>• {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>
        </section>
    )    
}

export default HousingPage;