import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function NavIcon (props) {
    const lit = '/img/torch_lit.gif';
    const unlit = '/img/torch_unlit.png';
    const [hover, setHover] = useState(unlit)

    return (
        <li onMouseEnter={()=>setHover(lit)} onMouseLeave={()=>setHover(unlit)}><NavLink to={props.to}><img src={hover} alt=""/> {props.label}</NavLink></li>
    )
}