import React from "react";

const Scroll = (props) => {
    return(
        <div style={{overflowX: 'hidden',height: '60vh' }}>
            {props.children}
        </div>
    );
}

export default Scroll;