import React, { Component } from 'react';
import "./Toolbox.css";

class Toolbox extends Component {
    render() {
        return (
            this.props.toolbox === 'dice' && (
            <div id="gameRegion">
                <iframe 
                    title="dice roller"
                    src="https://ltwilhelm.github.io/dragonslayer-dice/"
                    class="webgl-content"
                    style={{
                        border: "0px #000000 none",
                        width: '100%'
                    }}
                    scrolling="no"
                    frameborder="1"
                    height="1080"
                    width="1920"></iframe>
            </div>
            )
        )
    }
}

export default Toolbox;