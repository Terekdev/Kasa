import React from 'react';
import { NavLink} from 'react-router-dom';
const Card = ({ id, title, cover }) => {
    return(
        <li key={id} className='house'>
            <NavLink to={'/housing/' + id}>
                <figure className='house_figure'>
                    <img src={cover} alt={title}  className='house_figure_cover'/>
                    <figcaption className='house_figure_figcaption'>
                        <h2 className='house_figure_figcaption_title'>{title}</h2>
                    </figcaption>
                </figure>
            </NavLink>
        </li>
    )
}

export default Card;