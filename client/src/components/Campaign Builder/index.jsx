import React, { Component } from 'react';
import dbAPI from "../../utils/dbAPI";
import "../../index.css";
import "./campaign.css";
import { AppStateContext } from '../../AppContext';
import Buttons from '../Buttons';
import Session from '../SessionVerification';
import { Redirect } from 'react-router-dom'


class CampaignBuilder extends Component {
  state = {
    campaign: "",
    userId: "",
    campaignId: '',
    redirect: ""
  }

  static contextType = AppStateContext;

  createCampaign = (campaignData) => {
    dbAPI.createCampaignUser(campaignData)
      .then(saved => {
        // console.log(saved)
        this.setState({ campaignId: saved.data._id }, () => { console.log(this.state.campaignId) })
      })
      .catch(err => console.log(err))
  }

  findUser = () => {
    let id = []
    for (let i = 0; i < this.context.user.length; i++) {
      id.push(this.context.user[i])
    }
    this.createCampaign({
      name: this.state.campaign,
      userId: id.join('')
    });
    this.setState({ campaign: "" })
    }

  handleCampaignCreation = event => {
    event.preventDefault()
    this.findUser()
  }

  render() {
    return (
      <Session>
        <div className="Campaign container">
          <div className="row">
            {!this.state.campaignId ? (
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="campaignName"
                    name="campaignName"
                    type="text"
                    className="validate white-text"
                    value={this.state.campaign}
                    onChange={event =>
                      this.setState({ campaign: event.target.value })
                    }
                  />
                  <label
                    htmlFor="campaignName"
                    className="black-text bold active"
                  >
                    Enter Your Campaign Name
                      </label>
                </div>
              </div>
              <input
                className="btnCampaign btn"
                type="submit"
                onClick={this.handleCampaignCreation}
              />
            </form>
            ) : (
              <>
              {console.log(this.state.campaignId)}
                <h3>Campaign successfully created, would you like to create a character or view your campaign?</h3>
                <a href={`/viewcampaign/${this.state.campaignId}`}><Buttons title={'View Campaign'} /></a>
                <a href={`/character/create/${this.state.campaignId}`}><Buttons title={'Create Character'} /></a>
              </>
            )}
          </div>
        </div>
      </Session>
    );
  }
}

export default CampaignBuilder