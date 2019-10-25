import React, { Component } from 'react';
import "./Toolbox.css";

class Toolbox extends Component {
    render() {
        return (
            <div id="gameRegion" style=" display: none;">
                <button id="hideDice">Close Dice Tray</button>
                <iframe src="./game.html" class="webgl-content" style="border:0px #000000 none;" scrolling="no"
                    frameborder="1" marginheight="px" marginwidth="960px" height="600" width="960px"></iframe>
            </div>
        )
    }
}

export default Toolbox;