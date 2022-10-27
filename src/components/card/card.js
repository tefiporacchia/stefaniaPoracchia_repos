import React from 'react'
import "./card.css";
const Card = ({id, image, name, onClick}) => {
    const style = "card-container";
    return (
        <div className={style} onClick={onClick}>
            <img src={image} alt={name} />
            <div className="number"><small>#0{id}</small></div>
            <h3>{name}</h3>
        </div>
    )
}

export default Card