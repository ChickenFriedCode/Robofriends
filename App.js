import React from "react";
import CardsFactory from "./CardsFactory";
import SearchBox from "./SearchBox";
import './App.css'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : "",
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((users) => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render(){        
        const filterRobots = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        });
        
        if (this.state.robots.length === 0) {
            return (
                <div className="tc">
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            return(
                <div className="tc">
                    <h1>ROBO-FRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardsFactory robots={filterRobots} />
                </div>
            );
        }
    }
}

export default App;