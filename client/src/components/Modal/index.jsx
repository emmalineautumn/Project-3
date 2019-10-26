import React from 'react';
import './Modal.css'
import Buttons from '../Buttons';

const Modal = props => {
    // const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    return (
        <div className="modal display-block" style={{zIndex: 100}}>
            <section className="modal-main">
                {props.children}
                {/* <Buttons clickThis={props.handleClose} title="Close" /> */}
            </section>
        </div>
    );
};

export default Modal