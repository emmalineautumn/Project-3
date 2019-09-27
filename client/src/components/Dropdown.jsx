import React, {Component} from 'react';

class Dropdown extends Component {
    state = {
        displayDropdown: false
    }


    toggleDropdown = () => {
        this.setState({displayDropdown: !this.state.displayDropdown})
    }

    render () {
        return (
        <>
            <li className="dropdown-trigger" data-target={this.props.id} onClick={this.toggleDropdown}>{this.props.label}</li>
            <ul id={this.props.id} hidden={this.state.displayDropdown ? false : true}>
                {this.props.children}
            </ul>
        </> 
        );
    }
}

export default Dropdown;