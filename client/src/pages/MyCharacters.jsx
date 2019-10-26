import React from 'react';
import '../App.css';
import Characters from '../components/MyCharacters'
import Session from '../components/SessionVerification';

const MyCharacters = () => {
        return (
            <Session>
                <Characters />
            </Session>
    );
}

export default MyCharacters;