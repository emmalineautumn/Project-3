import React, { useState } from 'react';
import dbAPI from "../../utils/dbAPI";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

const SignUp = (props) => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [redirectTo, setRedirectTo] = useState("")

    const handleLogin = event => {
        event.preventDefault();
        axios
            .post("/api/user/login", {
                username: user,
                password: password
            })
            .then(response => {
                console.log("login response: ")
                console.log(response)
                setRedirectTo("/")
            }).catch(error => {
                console.log("login error: SignIn Component")
                console.log(error)
            })

    }

    if (redirectTo) {
        return <Redirect to={{ pathname: redirectTo }} />
    } else {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="usernameLogin" name="username" type="text" className="validate" value={user} onChange={event => setUser(event.target.value)} />
                                <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="passwordLogin" type="password" name="password" className="validate" value={password} onChange={event => setPassword(event.target.value)} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <input className="btn" type="submit" onClick={handleLogin} />
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp