import React, { useContext } from 'react';
import dbAPI from '../utils/dbAPI';
import UserSession from '../App';
import { AppStateContext } from '../AppContext';


function Profile (props) {
    const context = useContext(AppStateContext);
    console.log(context);

    const populateUser = () => {
        // db
        dbAPI.populateCharacter()
    }

        return (
                <div className="container grey lighten-2">
                    <div className="row">
                        <h2>Campaigns</h2>
                        
                    </div>
                </div>
        )
    
}

export default Profile;