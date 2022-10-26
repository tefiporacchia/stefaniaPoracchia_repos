import React from 'react';
const Card = () => {

    const a = async() =>{
        try {
            const response = await fetch("api/fruit/all",{method:"GET"});
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    }

return(<div>hola</div>);

}
export default Card;