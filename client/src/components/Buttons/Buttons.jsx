import React from 'react';
import "./Buttons.css";

const Buttons = (props) => {
    return (
        <button id="yesButton" data-id={props.id} className={"waves-effect waves-light btn" + (props.circle ? ' btn-floating btn-small' : '') + (props.colors ? (' ' + props.colors.join(' ')) : '') + (props.large ? ' btn-large' : '')} onClick={props.clickThis}>{props.title}</button>
    );
}

export default Buttons;