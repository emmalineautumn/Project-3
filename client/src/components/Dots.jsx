import React from 'react';

export default function Dot (props) {
    return <div onClick={props.clickThis} className={props.colors.join(' ') + ' hover'} style={{
        height: '.3em',
        width: '.3em',
        margin: '.3em',
        borderRadius: '.15em'
    }} />
}