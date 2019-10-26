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
        dbAPI.getCampaign(id)
            .then(res => {
                console.log(res)
                this.setState({campaign: res.data});
                dbAPI.getUser(res.data.DM)
                    .then(res => {
                        this.setState({DM: res.data[0].username});
                    });
            });
    }

    render () {
        return (
            <Session>
                {this.state.campaign && (<div className="container grey lighten-2">
                    <h1>{this.state.campaign.name}</h1>
                    <h3>Dungeon Master: {this.state.DM}</h3>
                    <h4>
                        Click below to join this campaign and create a character
                    </h4>
                    <a href={`/character/create/${this.props.match.params.id}`}><Buttons title="Join Campaign" /></a>
                </div>)}
            </Session>
        )
    }
}

export default CampaignJoin;