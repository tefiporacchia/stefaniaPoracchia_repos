import React, {useContext, useEffect, useState} from 'react'
import "./card.css";
import {ParentContext} from "../screen/screen";
const Card = ({id, image, name}) => {
    const { elemForInfo, setElemForInfo } = useContext(ParentContext);

    const onClick = () => {
        setElemForInfo(name);
    };


    return (
        <div className="card-container" onClick={onClick}>
            <img src={image} alt={name} />
            <div className="number"><small>#0{id}</small></div>
            <h3>{name}</h3>
        </div>
    )
}

export default Card