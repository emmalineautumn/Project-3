import React from 'react'

const Buttons = (props) => {
    return (
        <button style={{margin: '.3em'}} className={"waves-effect waves-light btn" + (props.colors ? (' ' + props.colors.join(' ')) : '') + (props.large ? ' btn-large': '')} onClick={props.clickThis}>{props.title}</button>
    );
}

export default Buttons