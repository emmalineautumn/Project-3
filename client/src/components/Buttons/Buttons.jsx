// import React from 'react';
// import "./Buttons.css";


// const Buttons = (props) => {
//     return (
//         <button className={"waves-effect waves-light btn" + (props.colors ? (' ' + props.colors.join(' ')) : '') + (props.large ? ' btn-large': '')} onClick={props.clickThis}>{props.title}</button>
//     );
// }

// export default Buttons

import React from 'react'

const Buttons = (props) => {
    return (
        <button style={{ margin: '.3em' }} className={"waves-effect waves-light btn" + (props.circle ? ' btn-floating btn-small' : '') + (props.colors ? (' ' + props.colors.join(' ')) : '') + (props.large ? ' btn-large' : '')} onClick={props.clickThis}>{props.title}</button>
    );
}

export default Buttons;