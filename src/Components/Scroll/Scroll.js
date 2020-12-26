import React from 'react';
/**
 *   created bt Jixuan Li
 *   2020-12-25-20:17
 */

const Scroll = (props) =>{
    //every react component has default prop: children: the thing inside the current component
    // Component wraps Components
    return (
        <div style={{overflowY: 'scroll', border:'1px solid black', height:'750px'}}>
            {props.children}
        </div>
    );
}

export  default Scroll;
