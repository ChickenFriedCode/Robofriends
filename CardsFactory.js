import React from "react";
import Card from "./card";

class CardsFactory extends React.Component{
    render(){



        // Shortens the 'this.props.robots' line over and over...
        const robo = this.props.robots;
        
        //I am unable to figure out how to get the .MAP to work on this section.
        
        // let cardArray = robots.map((user, i) => {
        // <Card
        //             key={i}
        //             id={robots[i].id}
        //             names={robots[i].name}
        //             username={robots[i].username}
        //             email={robots[i].email}
        //         />
        // }); 
        
        
        
        //So I'm using the standard For Loop.
        const cardArray = [];
        for (let i = 0; i < robo.length; i++){
            cardArray.push(
                <Card
                    key={robo[i].id}
                    id={robo[i].name}
                    names={robo[i].name}
                    username={robo[i].username}
                    email={robo[i].email}
                />
            );
        }
        return (
            <div className="cards">
                {cardArray}
            </div>
        );
    }
}

export default CardsFactory