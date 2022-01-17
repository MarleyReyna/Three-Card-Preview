import React from 'react';
import './Card.scss'
import CardInfo from './CardInfo'

const Card = () => {
    return (
        <main>
            {CardInfo.map(item =>{
                return(
                    <div className={item.name}>
                        <img src={item.image} alt='' />
                        <h1>{item.name}</h1>
                        <p>{item.info}</p>
                        <button>Learn More</button>
                    </div>
                )
            })}
        </main>
    );
}
 
export default Card;