import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="z-depth-1 hide-on-med-and-down">
                    <div className="grey darken-3"
                        style={{
                            padding: '.5em',
                            borderBottomLeftRadius: '1em',
                            position: 'absolute',
                            top: '0',
                            right: '0'
                        }}
                    >
                        <a href="/profile" className=" valign-wrapper">
                            <span className="white-text" style={{ marginRight: '1em' }}>Username</span>
                            <img className="z-depth-3 teal darken-4" src="https://www.wellnessodyssey.co.za/wp-content/uploads/2016/04/default-user-icon.png" alt="user" style={{
                                height: '3em',
                                width: '3em',
                                borderRadius: '3em'
                            }} />
                        </a>
                    </div>
            </header>
        )
    }
}

export default Header;