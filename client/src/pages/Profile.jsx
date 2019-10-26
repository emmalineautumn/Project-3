import React, { useState, useContext, useLayoutEffect } from 'react';
import dbAPI from '../utils/dbAPI';
import { AppStateContext } from '../AppContext';
import CampaignCard from '../components/ProfileCampaignCard'


function Profile(props) {
    const context = useContext(AppStateContext);
    console.log(context);
    const [userCharacters, setUserCharacters] = useState("")
    const [userCampaigns, setUserCampaigns] = useState("")

    const populateUser = () => {
        dbAPI.populateCharacter(context.user).then(data => setUserCharacters(data.data.characters))
        dbAPI.populateCampaign(context.user).then(data => setUserCampaigns(data.data.campaigns))
    }

    useLayoutEffect(populateUser, [context.user])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6" style={{ height: "80vh", overflow: "auto" }}>
                    <h2 style={{ color: "#fff" }}>Campaigns</h2>
                    {userCampaigns && userCampaigns.map(data =>
                        <CampaignCard key={data._id} title={data.name} created={data.date} dm={data.DM} campaignId={data._id} />)}
                </div>
                <div className="col s12 m6" style={{ height: "80vh", overflow: "auto" }}>
                    <h2 style={{ color: "#fff" }}>Characters</h2>
                    {userCharacters && userCharacters.map(data =>
                        <CampaignCard key={data._id} title={data.name} created={data.date} characterId={data._id} />)}
                </div>
            </div>
        </div>
    )

}

export default Profile;