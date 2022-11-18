import React from "react";


const SearchBox= ({searchChange}) => {
    return (
        <div className="pa2 searchBar">
            <input 
                className="pa3 b--green bg-lightest-blue search_input" 
                type='search' 
                placeholder='Search Robots.' 
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;