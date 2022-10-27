import React from 'react'
import "./pictureGroup.scss";
const PictureGroup = ({elems}) => {
    return (
        <div className="picture-group">
            {elems.map((elem) => {
                return(<img className="circle" src={elem}/>)
            })}
        </div>
    )
}

export default PictureGroup