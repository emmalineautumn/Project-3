import React, { Component } from 'react'
import Modal from '../components/Modal'
import SignIn from '../components/SignIn'


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
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <SignIn />
                </Modal>
                <button type="button" onClick={this.showModal}>
                    open
                </button>
            </>
        )
    }
}