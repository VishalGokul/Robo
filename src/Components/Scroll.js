import React from "react";

const Scroll = (props) =>{ 
    return(
        <div style={{overflow: 'scroll' , border: '5px solid #E8F9FD', height:'800px'}}>
            {props.children}
        </div>
    ) 
  
}

export default Scroll;