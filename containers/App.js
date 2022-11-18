import React from "react";
import CardsFactory from "../components/CardsFactory";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
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
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
        });
        
        if (robots.length === 0) {
            return (
                <div className="tc">
                    <h1>Loading...</h1>
                </div>
            );
        }
        return(
            <div className="tc">
                <h1>ROBO-FRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardsFactory robots={filterRobots} />
                </Scroll>
            </div>
        );
        }
    }


export default App;