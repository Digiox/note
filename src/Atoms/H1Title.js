import React from 'react';

const H1Title = (props) => {
    return ( <h1 {...props}>{props.children}</h1> );
}
 
export default H1Title;