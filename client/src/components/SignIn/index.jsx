import React, {useState} from 'react';
import dbAPI from "../../utils/dbAPI"

const SignUp = (props) => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const login = userData => {
        dbAPI.getUser(userData)
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    const handleLogin = event => {
        event.preventDefault();
        const userData = {
            username: user, 
            password: password
        }
        login(userData);
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" action ="/sign-in" method="GET">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="username" name="username" type="text" className="validate" value={user} onChange={event => setUser(event.target.value)} />
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" name="password" classNameName="validate" value={password} onChange={event => setPassword(event.target.value)} />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <input className="btn" type="submit" onClick={handleLogin} />
                </form>
            </div>
        </div>
    )
}

export default SignUp