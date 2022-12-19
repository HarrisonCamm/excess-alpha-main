import React from 'react'

export default function CardItem(value) {
  return (
    <>
    
        <li className="cards__item">
            
                <figure className="cards__item__pic-wrap">
                    <img src={value.value.image} alt={value.value.title} className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{value.value.title}</h5>
                </div>

        </li>
    </>
  )
}
