import React, { Component } from 'react';
import "./Header.css";


class Header extends Component {
    render() {
        return (
            <header className="z-depth-2 hide-on-med-and-down">
                    <div id="userDisplay" className="z-depth-2 grey darken-3">
                        <div id="userDisplayTwo" className="grey darken-3 left"></div>
                            <a href="/sign-in" className="valign-wrapper right">
                                <span className="username" style={{ margin: '1em' }}>Sign In</span>
                            </a>
                            <img id="userDisplayImg" className="z-depth-3 teal darken-4" style={{ marginRight: '1em' }} src="https://www.wellnessodyssey.co.za/wp-content/uploads/2016/04/default-user-icon.png" alt="user"/>
                            <a href="/sign-up" className="valign-wrapper right">
                                <span className="username" style={{ margin: '1em' }}>Register</span>
                            </a>
                    </div>
            </header>
        )
    }
}

export default Header;