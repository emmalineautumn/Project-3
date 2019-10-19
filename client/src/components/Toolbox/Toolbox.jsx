import React, { Component } from 'react';
import Whiteboard from 'react-component-whiteboard';
import "./Toolbox.css";


class Toolbox extends Component {
    render() {
        return (
            <Whiteboard allowDraw />
        ) 
    }
}

export default Toolbox;