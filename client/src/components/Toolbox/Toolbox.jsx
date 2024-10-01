import React, { Component } from 'react';
import "./Toolbox.css";

class Toolbox extends Component {
    render() {
        return (
            this.props.toolbox === 'dice' && (
            <div id="gameRegion">
                <iframe 
                    title="dice roller"
                    src="https://emmalineautumn.github.io/dragonslayer-dice/"
                    className="webgl-content"
                    style={{
                        border: "0px #000000 none",
                        width: '100%'
                    }}
                    scrolling="no"
                    frameBorder="1"
                    height="1080"
                    width="1920"></iframe>
            </div>
            )
        )
    }
}

export default Toolbox;