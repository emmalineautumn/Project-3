import React, { useState, useContext, useLayoutEffect } from 'react'
import dbAPI from '../../utils/dbAPI'
import { AppStateContext } from '../../AppContext';
import CampaignCard from './CampaignCard'

const MyCampaigns = () => {
    const context = useContext(AppStateContext);
    const [campaigns, setCampaigns] = useState("")

    const findMyCampaigns = () => {
        let id = []
        for (let i = 0; i < context.state.user.length; i++) {
            id.push(context.state.user[i])
        }
        let userId = id.join('')
        dbAPI.populateCampaign(userId).then(data => setCampaigns(data.data.campaigns))
    }

    useLayoutEffect(findMyCampaigns, [context])

    return (
        <>
            <div className="container">
            <div className="row">
            <div className="col m8 offset-m2 s12" style={{fontFamily: 'Grenze'}}>
                <h1 style={{color: "#fff"}}>My Characters</h1>
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