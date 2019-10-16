import React from 'react';
import "./Dots.css";


export default function Dot (props) {
    return <div id="dots" onClick={props.clickThis} className={props.colors.join(' ') + ' hover'}/>
}