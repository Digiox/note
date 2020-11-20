import React from 'react';

const Paragraph = (props) => {
    return ( <p {...props}>{props.children}</p> );
}
 
export default Paragraph;