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
                    <li className="grey lighten-5">Dice Roller</li>
                </ul>
            </div>
        )
    }
}

export default Footer;