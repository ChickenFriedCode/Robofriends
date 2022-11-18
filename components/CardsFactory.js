import React from "react";
import Card from "./card";

class CardsFactory extends React.Component{
//const CardsFactory = ({robots}) => {
    //render(){




        
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
        
    render(){
        // Shortens the 'this.props.robots' line over and over...
        const robo = this.props.robots;
        
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
            <div>
                {cardArray}
            </div>
        );
        // const cardArray = robots.map((user,i) =>{
        //     return <Card 
        //         key={robots[i].id} 
        //         id={robots[i].name} 
        //         name={robots[i].name} 
        //         email={robots[i].email}  
        //     />
        // });
        // return (
        //     <div>
        //         {cardArray}
        //     </div>
        // );

    }
}
export default CardsFactory