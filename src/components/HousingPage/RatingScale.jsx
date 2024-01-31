import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />
const starGrey = <FontAwesomeIcon icon={faStar} />

const RatingScale = (props) => {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className='house_page_header_hoster_rates'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()} className='house_page_header_hoster_rates_star'>{star}</span> 
                    : <span key={rangeElem.toString()} className='house_page_header_hoster_rates_star house_page_header_hoster_rates_star_grey'>{starGrey}</span>
            )}
        </div>
    )
}

export default RatingScale;