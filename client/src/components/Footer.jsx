import React,{Component} from 'react';

class Footer extends Component {
    render () {
        return (
            <div className="" id="toolbox"
            style={{
                position: 'fixed',
                bottom: '0',
                right: '10%'
            }}
            >
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