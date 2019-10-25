import React, { Component } from 'react';
import dbAPI from "../../utils/dbAPI";
import "../../index.css";
import "./campaign.css";

class CampaignBuilder extends Component {
    state = {
        campaign: "",
        userId: ""
    }


    createCampaign = (campaignData) => {
        dbAPI.createCampaignUser(campaignData)
            .then(saved => console.log(saved))
            .catch(err => console.log(err))
    }

    findUser = () => {
        dbAPI.userSession().then(user => {
            console.log(user.data)
            let id = []
            for(let i = 0; i < user.data.length; i++) {
                id.push(user.data[i])
            }
            console.log(id.join(''))
            this.setState({ userId: id.join('') })
            console.log(this.state.userId)
            this.createCampaign({
                name: this.state.campaign,
                userId: this.state.userId
            })
            this.setState({ campaign: "" })
        })
    }

    handleCampaignCreation = event => {
        event.preventDefault()
        this.findUser()
        console.log(this.state.userId)
        console.log("Handle campaign creation function")
    }
    render() {
        return (
          <div className="Campaign container">
            <div className="row">
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
            </div>
          </div>
        );
    }
}

export default CampaignBuilder