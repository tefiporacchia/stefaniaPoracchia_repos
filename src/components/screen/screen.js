import React, {createContext} from 'react';
//import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import "./screen.scss";
import CardGroup from "../cardGroup/cardGroup";
import InfoCard from "../infoCard/infoCard";

export const ParentContext = createContext("");
const Screen = () =>{

    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/?limit=4&offset=0");
    const [elementsFromCurrentUrl, setElementsFromCurrentUrl] = useState([]);
    const [currentOffset, setCurrentOffset] = useState(0);
    const [elemForInfo, setElemForInfo] = useState("");
    const [completeElemForInfo, setCompleteElemForInfo] = useState({});

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
                console.log(result.sprites.other.dream_world.front_default)
            } catch (error) {
                return error;
            }

            items.push(result);
        }
        //items.sort((a,b) => (a.name.localeCompare(b.name)));
        items.sort((a,b) => (a.id - b.id));
        setElementsFromCurrentUrl(items);
    }

    const addOffset = () => {
        const curOffset = currentOffset;
        setCurrentOffset(curOffset+4);
        const oldUrl = url;
        setUrl("https://pokeapi.co/api/v2/pokemon/?limit=4&offset="+curOffset);
    }

    const subtractOffset = () => {
        const curOffset = currentOffset;
        setCurrentOffset(currentOffset-4);
        const oldUrl = url;
        setUrl("https://pokeapi.co/api/v2/pokemon/?limit=4&offset="+curOffset);
    }

    const getFullElement = async() => {
        let result;
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+elemForInfo,{method:"GET"});
            const data = await response.json();
            result = data;
            console.log(result.sprites.other.dream_world.front_default)
        } catch (error) {
            return error;
        }
        setCompleteElemForInfo(result);
    }

    useEffect(()=>{
        getUrlElements();
    },[])

    useEffect(()=>{
        getUrlElements();
    },[currentOffset])

    useEffect(()=>{
        getFullElement();
    },[elemForInfo])

    console.log(elementsFromCurrentUrl)

    return (

            <div data-testid="screen" className="screen" >
                <ParentContext.Provider value={{ elemForInfo, setElemForInfo }}>
                <span className="title" >Listado de Pokemon</span>
                <div className="container">
                    <div className="left">
                        {/*{elementsFromCurrentUrl.map((elem) => {
                            return(<p key={elem.name}>{elem.name}</p>)
                        })}
                        {elementsFromCurrentUrl.map((elem) => {
                            return(<Card id={elem.id} name={elem.name} image={elem.sprites.other.dream_world.front_default}/>)
                        })}*/}
                        <span className="searchBar">searchbar</span>
                        <CardGroup elems={elementsFromCurrentUrl}/>
                       {/* <SearchBar/>
                        <CardGroup/>
                        <div className="btn-group">
                        </div>*/}
                    </div>
                    <div className="right">
                        {Object.keys(completeElemForInfo).length !== 0 && <InfoCard element={completeElemForInfo}/>}
                    </div>
                </div>
                <div className="buttons">
                    <div><button onClick={subtractOffset} className="buttonForward">Backward</button></div>
                    <div><button onClick={addOffset} className="buttonBackward">Forward</button></div>
                </div>
                </ParentContext.Provider>
            </div>
    );

}

export default Screen;