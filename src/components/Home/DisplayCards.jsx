import React from 'react';
import houses from '../../API/logements.json'
import Card from './Card'

const DisplayCards = () => {
    return(
        <section className='houses_container'>
            <ul className='houses_list'>
                {houses.map(({ id, title, cover }) => (
                    <Card
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default DisplayCards;