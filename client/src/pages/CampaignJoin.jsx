import React, { Component } from 'react';
import Session from '../components/SessionVerification';
import dbAPI from '../utils/dbAPI';
import Buttons from '../components/Buttons';

class CampaignJoin extends Component {
    state = {
        campaign: {},
        DM: ''
    }

    componentDidMount(){
        const {id} = this.props.match.params
        console.log(id)
        dbAPI.getCampaign(id)
            .then(res => {
                this.setState({campaign: res.data[0]});
                dbAPI.getUser(res.data[0].DM)
                    .then(res => {
                        this.setState({DM: res.data[0].username});
                    });
            });
    }

    render () {
        return (
            <Session>
                <div className="container grey lighten-2">
                    <h1>{this.state.campaign.name}</h1>
                    <h3>{this.state.DM}</h3>
                    <p>
                        Click below to join this campaign and create a character
                    </p>
                    <Buttons title="Join Campaign" />
                </div>
            </Session>
        )
    }
}

export default CampaignJoin;