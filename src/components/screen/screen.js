import React from 'react';
//import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

const Screen = () =>{

    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/?limit=4&offset=0");
    const [elementsFromCurrentUrl, setElementsFromCurrentUrl] = useState([]);


    /*const getUrlElements = async () => {
        const res=await axios.get(url);
        getResults(res.data.results);
    }*/

    /*const getResults=async(res)=>{
        console.log(res);
        const items = [];

        for(let item of res){
            console.log(item.name)
            const result = await axios.get(item.url);
            items.push(result.data);
        }
        items.sort((a,b) => (a.name.localeCompare(b.name)));
        setElementsFromCurrentUrl(items);

    }*/

    const getUrlElements = async () => {
        try {
            const response = await fetch(url,{method:"GET"});
            console.log(response)
            const data = await response.json();
            getResults(data.results);
        } catch (error) {
            return error;
        }
    }

    const getResults=async(res)=>{
        console.log(res);
        const items = [];
        for(let item of res){
            console.log(item.name)
            let result;
            try {
                const response = await fetch(item.url,{method:"GET"});
                const data = await response.json();
                result = data;
            } catch (error) {
                return error;
            }

            items.push(result);
        }
        items.sort((a,b) => (a.name.localeCompare(b.name)));
        setElementsFromCurrentUrl(items);
    }


    useEffect(()=>{
        getUrlElements();
    },[])

    console.log(elementsFromCurrentUrl)

    return (

            <div data-testid="screen" >
                <span>Listado de Pokemon</span>
                <div className="left-content">
                    {elementsFromCurrentUrl.map((elem) => {
                        return(<p key={elem.name}>{elem.name}</p>)
                    })}
                   {/* <SearchBar/>
                    <CardGroup/>
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}
                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
                    </div>*/}
                </div>
                <div className="right-content">
                    {/*<MoreInfo/>*/}
                </div>
            </div>
    );

}

export default Screen;