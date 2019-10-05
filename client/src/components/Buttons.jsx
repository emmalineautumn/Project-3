import React from 'react'

const Buttons = (props) => {
    return (
        <button className="waves-effect waves-light btn-large red darken-4" onClick={props.clickThis}>{props.title}</button>
    );
}

export default Buttons