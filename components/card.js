import React from 'react';

class Card extends React.Component{
    render(props){
        let robots_pics = "https://robohash.org/" + this.props.id.toString() + "?100x100";
        return (
            <div className="tc bg-light-green dib pa3 ma2 grow shadow-2 bw2">
                <img src={robots_pics} alt="robot_picture"></img>
                <div className="tc">
                <h2>{this.props.names}</h2>
                <p>{this.props.email}</p>
            </div>
            </div>
        );
    }
}

export default Card