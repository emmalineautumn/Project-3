import React from 'react';
import "./Buttons.css";


const Buttons = (props) => {
    return (
        <button className={"waves-effect waves-light btn" + (props.colors ? (' ' + props.colors.join(' ')) : '') + (props.large ? ' btn-large': '')} onClick={props.clickThis}>{props.title}</button>
    );
}

export default Buttons