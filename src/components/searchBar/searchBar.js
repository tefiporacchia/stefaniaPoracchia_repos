import React, {useContext, useState} from 'react'
import {ParentContext} from "../screen/screen";
import "./searchBar.scss";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const { elemForInfo, setElemForInfo } = useContext(ParentContext);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        setElemForInfo(searchInput);
    }

    return (
        <div className="search-bar" data-testid="searchBar">
            <i className="fa fa-search"></i>
            <input
                className="input-field"
                type="text"
                placeholder="Buscar"
                onChange={handleChange}
                value={searchInput} />
        </div>
    )


}

export default SearchBar