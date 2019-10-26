import React, { useState, useContext, useLayoutEffect } from 'react'
import dbAPI from '../../utils/dbAPI'
import { AppStateContext } from '../../AppContext';
import CampaignCard from './CampaignCard'
import {Link} from 'react-router-dom'
import Buttons from '../Buttons'

const MyCampaigns = () => {
    const context = useContext(AppStateContext);
    const [campaigns, setCampaigns] = useState("")

    const findMyCampaigns = () => {
        if (context.user) {
            let id = []
            for (let i = 0; i < context.user.length; i++) {
                id.push(context.user[i])
            }
            let userId = id.join('')
            dbAPI.populateCampaign(userId).then(data => setCampaigns(data.data.campaigns))
        }
    }

    useLayoutEffect(findMyCampaigns, [context])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col m8 offset-m2 s12" style={{ fontFamily: 'Grenze' }}>
                        <h1 style={{ color: "#fff" }}>My Campaigns</h1>
                        <Link to="/campaign">
                            <Buttons
                                title="Start a New Campaign"
                                colors={["red", "darken-4"]}
                            />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {campaigns && campaigns.map(data => {
                        return <div className="col s12 m6" style={{ height: "60vh", overflow: "auto" }} key={data._id}>
                            <CampaignCard
                                key={data._id}
                                title={data.name}
                                campaignId={data._id}
                            />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default MyCampaigns