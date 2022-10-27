import React, {useContext, useEffect, useState} from 'react'
import "./card.scss";
import {ParentContext} from "../screen/screen";
import {toUppercase} from "../../utils/helpers";
const Card = ({id, image, name}) => {
    const { elemForInfo, setElemForInfo } = useContext(ParentContext);

    const onClick = () => {
        setElemForInfo(name);
    };

    console.log("number-"+id%4)

    const identifier = "card-container"+ " " + "number-"+id%4
    return (
        <div className={identifier} onClick={onClick}>
            <img src={image} alt={name} />
            <div className="number"><small>#0{id}</small></div>
            <h3>{toUppercase(name)}</h3>
        </div>
    )
}

export default Card