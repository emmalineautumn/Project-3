import React,{Component} from 'react';
import "./Footer.css";


class Footer extends Component {
    render () {
        return (
            <div className="" id="toolbox">
                <ul 
                style= {{
                    display: 'flex'
                }}
                >
                    <li className="grey lighten-5">Whiteboard</li>
                    <li className="grey lighten-5">Tables</li>
                    <li className="grey lighten-5" onClick={() => this.props.changeActiveTool('dice')}>Dice Roller</li>
                    {this.props.toolbox !== 'none' && <li className="grey lighten-5" onClick={() => this.props.changeActiveTool('none')}>Close Toolbox</li>}
                </ul>
            </div>
        )
    }
}

export default Footer;