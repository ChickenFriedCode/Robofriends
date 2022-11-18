import React from "react";
import CardsFactory from "./CardsFactory";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends React.Component{
    render(){
        return(
            <div className="tc">
                <h1>Robo Friends~!</h1>
                <SearchBox/>
                <CardsFactory robots={robots} />
            </div>
        );
    }
}

export default App;