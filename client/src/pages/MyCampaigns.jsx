import React from 'react';
import '../App.css';
import Campaigns from '../components/MyCampaigns'
import Session from '../components/SessionVerification';

const MyCampaigns = () => {
        return (
            <Session>
                <Campaigns />
            </Session>
    );
}

export default MyCampaigns;