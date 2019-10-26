import React, { Component } from 'react';
import { AppStateContext } from '../../AppContext';
import "./Header.css";
import dbAPI from '../../utils/dbAPI'


class Header extends Component {
    static contextType = AppStateContext;

    render() {
        return (
            <header className="z-depth-2 hide-on-med-and-down">
                <div id="userDisplay" className="z-depth-2 grey darken-3">
                    <div id="userDisplayTwo" className="grey darken-3 left"></div>
                    {!this.context.user && (
                        <>
                            <a href="/sign-in" className="valign-wrapper right">
                                <span className="username" style={{ margin: '1em' }}>Sign In</span>
                            </a>
                            <a href="/sign-up" className="valign-wrapper right">
                                <span className="username" style={{ margin: '1em' }}>Register</span>
                            </a>
                        </>
                    )}
                    {this.context.user &&
                        <>
                            <a href="/" className="valign-wrapper right">
                                <span className="username" style={{ margin: '1em' }} onClick={() => dbAPI.userLogout()}>Logout</span>
                            </a>
                            <a href="/profile" className="valign-wrapper right">
                                <span className="username" style={{ margin: '1em' }}>{this.context.username}</span>
                            </a>
                        </>}
                    <img id="userDisplayImg" className="z-depth-3 teal darken-4" style={{ marginRight: '1em' }} src="https://www.wellnessodyssey.co.za/wp-content/uploads/2016/04/default-user-icon.png" alt="user" />
                </div>
            </header>
        )
    }
}

export default Header;