import React, {useContext, useState} from 'react';
import { AppStateContext } from '../AppContext';
import Modal from './Modal';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import Buttons from './Buttons';

export default function Session(props) {
    const [signInOption, setSignInOption] = useState('signin')
    const signInOptions = {
        signin: 'signup',
        signup: 'signin'
    }
    const context = useContext(AppStateContext);

    return (
        <>
            {!context.user && (
            <Modal>
                {signInOption === 'signup' && (
                    <>
                        <SignUpPage />
                        <span>Already have an account?</span>
                    </>
                    )}
                {signInOption === 'signin' && (
                    <>
                        <SignInPage />
                        <span>Don't have an account?</span>
                    </>
                )}
                <Buttons clickThis={() => setSignInOption(signInOptions[signInOption])} title={signInOption === 'signup' ? 'Sign In' : 'Create Account'} />
            </Modal>
            )}
            {props.children}
        </>
    )
}