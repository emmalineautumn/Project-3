import React, { Component } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/Sign-up'


export default class SignUpPage extends Component {
    state = {
        show: false
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    render() {
        return (
            <>
                    {/* <SignIn />
                    <hr /> */}
                    <SignUp />
            </>
        )
    }
}