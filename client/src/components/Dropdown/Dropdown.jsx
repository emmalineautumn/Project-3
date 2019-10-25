import React, { Component } from 'react';
import "./Dropdown.css";


class Dropdown extends Component {
    state = {
        displayDropdown: false
    }


    toggleDropdown = () => {
        this.setState({ displayDropdown: !this.state.displayDropdown })
    }

    render() {
        return (
            <>
                <li className="left-align" onMouseEnter={this.toggleDropdown} onMouseLeave={this.toggleDropdown}><a href={this.props.destination || '#'}>{this.props.label}</a>
                    <div style={{
                        position: 'fixed',
                        zIndex: 100
                    }}>
                        <ul id={this.props.id} className={"dropdown-content " + this.props.size}
                            style={{
                                display: this.state.displayDropdown ? 'flex' : 'none',
                            }}
                        >
                            {this.props.children}
                        </ul>
                    </div>
                </li>
            </>
        );
    }
}

export default Dropdown;