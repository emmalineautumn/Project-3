import React, {useState} from 'react';
import dbAPI from "../../utils/dbAPI"

const SignUp = () => {
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
        setUser("")
        setPassword("")
        setConfirmPass("")
        setEmail("")
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" action="/api/user" method="POST">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="username" name="username" type="text" className="validate white-text" value={user} onChange={event => setUser(event.target.value)} />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" name="password" className="validate white-text" value={password} onChange={event => setPassword(event.target.value)} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="passwordConfirm" type="password" name="password2" className="validate white-text" value={confirmPass} onChange={event => setConfirmPass(event.target.value)} />
                            <label htmlFor="password">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" name="email" className="validate white-text" value={email} onChange={event => setEmail(event.target.value)} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <input className="btn" type="submit" onClick={handleUserCreation} />
                </form>
            </div>
        </div>
    )
}

export default SignUp