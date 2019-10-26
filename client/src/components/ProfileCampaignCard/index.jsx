import React, { useState, useContext } from 'react';
import "./CampaignCard.css";
import dbAPI from '../../utils/dbAPI';
import { AppStateContext } from '../../AppContext';
import Button from '../Buttons'
import { Redirect } from 'react-router-dom'
let moment = require('moment');

const ProfileCard = (props) => {
    const context = useContext(AppStateContext);
    const [redirectTo, setRedirectTo] = useState("")

    const delCampaign = event => {
        event.preventDefault()
        dbAPI.deleteCampaign(event.target.id).then(result => {
            alert("Campaign Deleted")
            setRedirectTo('/profile')
        })
    }

    const delCharacter = event => {
        event.preventDefault()
        dbAPI.deleteCharacter(event.target.id).then(result => {
            alert("Character Deleted")
            setRedirectTo('/profile')
        })
    }

    if (redirectTo) {
        return <Redirect to={{ pathname: redirectTo }} />
    } else {
        return (
            <div className="campaignCard container" style={{ fontFamily: 'Grenze' }}>
                <div className="card">
                    <div className="card-content">
                        <h3>{props.title}</h3>
                        <h5>Created: {moment(props.created).format('MMMM Do YYYY, h:mm:ss a')}</h5>
                    </div>
                    <div className="card-content grey lighten-4">
                        <Button 
                        id={context.user === props.dm ? props.campaignId : props.characterId} 
                        clickThis={context.user === props.dm ? delCampaign : delCharacter} 
                        title={props.dm ? "Delete Campaign?" : "Delete Character?"} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCard