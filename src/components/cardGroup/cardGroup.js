import React from 'react'
import "./cardGroup.scss";
import Card from "../card/card";
const CardGroup = ({elems, onClick}) => {
    return (
        <div className="card-group">
            {elems.map((elem) => {
                return(<Card id={elem.id} image={elem.sprites.other.dream_world.front_default} name={elem.name} onClick={onClick}/>)
            })}
        </div>
    )
}

export default CardGroup