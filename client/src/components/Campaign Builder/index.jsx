import React, { Component } from 'react';
import dbAPI from "../../utils/dbAPI";
import "../../index.css";
import "./campaign.css";
import { Redirect } from 'react-router-dom'


class CampaignBuilder extends Component {
  state = {
    campaign: "",
    userId: "",
    redirect: ""
  }


  createCampaign = (campaignData) => {
    dbAPI.createCampaignUser(campaignData)
      .then(saved => this.setState({ redirect: "/mycampaigns" }))
      .catch(err => err)
  }

  findUser = () => {
    dbAPI.userSession().then(user => {
      console.log(user.data)
      let id = []
      for (let i = 0; i < user.data.length; i++) {
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
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: this.state.redirect }} />
      } else {
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
}

export default CampaignBuilder