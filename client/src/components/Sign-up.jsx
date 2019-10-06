import React, {useState} from 'react'

const SignUp = (props) => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
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
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" name="email" className="validate" value={email} onChange={event => setEmail(event.target.value)} />
                            <label for="email">Email</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp