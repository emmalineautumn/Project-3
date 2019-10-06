import React from 'react'

const Buttons = (props) => {
    return (
        <button style={{margin: '.3em'}} className={"waves-effect waves-light btn-large " + (props.color ? props.color.join(' ') : null)} onClick={props.clickThis}>{props.title}</button>
    );
}

export default Buttons