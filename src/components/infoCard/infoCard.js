import React, {useContext, useEffect} from 'react'
import "./infoCard.scss";
import {fromDoubleArrayToCommaSeparated} from "../../helpers";
import {ParentContext} from "../screen/screen";
const InfoCard = ({element}) => {

    //console.log(fromDoubleArrayToCommaSeparated(element?.types,"type","name"))

    /*const { elemForInfo, setElemForInfo } = useContext(ParentContext);

    console.log(elemForInfo)*/
    console.log(element);

    const img = element?.sprites?.other?.dream_world?.front_default;

    return (
        <div className="info-card-container">
            <img src={img} alt={element.name} />
            <div className="number"><small>#0{element.id}</small></div>
            <h3>{element.name}</h3>
            <div className="extra-attributes">
                <span>Types</span>
                {/*<span>{fromDoubleArrayToCommaSeparated(element.types, "type","name" )}</span>*/}
                <span>Weight</span>
                <span>{element.weight}</span>
                <span>Sprites</span>
                <span>a,b,c</span>
                <span>Movements</span>
                <span>a,b,c</span>
            </div>
        </div>
    )
}

export default InfoCard