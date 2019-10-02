import React, { Component } from 'react';

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
                    <ul id={this.props.id} className={"dropdown-content " + this.props.size}
                    style={{
                        position: 'relative',
                        bottom: '-100%',
                        display: this.state.displayDropdown ? 'flex' : 'none',
                        flexDirection: 'column',
                    }}
                    >
                        {this.props.children}
                    </ul>
                </li>
            </>
        );
    }
}

export default Dropdown;