import React, {useContext, useEffect} from 'react'
import "./infoCard.scss";
import {fromDoubleArrayToCommaSeparated, returnNonNullElements} from "../../helpers";
import {ParentContext} from "../screen/screen";
import PictureGroup from "../pictureGroup/pictureGroup";
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
                <span className="attr-title">Types</span>
                <span className="subtitle">{fromDoubleArrayToCommaSeparated(element.types, "type","name" )}</span>
                <span className="attr-title">Weight</span>
                <span className="subtitle">{element.weight}kg</span>
                <span className="attr-title">Sprites</span>
                <PictureGroup elems={returnNonNullElements(element.sprites)}/>
                <span className="attr-title">Movements</span>
                <span className="subtitle">{fromDoubleArrayToCommaSeparated(element.moves, "move","name" )}</span>
            </div>
        </div>
    )
}

export default InfoCard