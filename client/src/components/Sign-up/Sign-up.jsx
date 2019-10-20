import React, {useState} from 'react';
import dbAPI from "../../utils/dbAPI"
import Button from "../Buttons"

const SignUp = (props) => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [email, setEmail] = useState("")

    const createUser = (user) => {
        dbAPI.createUser(user)
            .then(saved => console.log(saved))
            .catch(err => console.log(err))
    }

    const handleUserCreation = event => {
        event.preventDefault()
        const userData = {
            username: user,
            password: confirmPass,
            email: email,
            date: Date.now()
        }
        createUser(userData)
        alert("Welcome" + user)
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" method="POST">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="username" name="username" type="text" className="validate white-text" value={user} onChange={event => setUser(event.target.value)} />
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" name="password" classNameName="validate white-text" value={password} onChange={event => setPassword(event.target.value)} />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" name="password2" classNameName="validate white-text" value={confirmPass} onChange={event => setConfirmPass(event.target.value)} />
                            <label for="password">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" name="email" className="validate white-text" value={email} onChange={event => setEmail(event.target.value)} />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <input className="btn" type="submit" onClick={handleUserCreation} />
                </form>
            </div>
        </div>
    )
}

export default SignUp