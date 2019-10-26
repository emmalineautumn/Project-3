import React, { useState, useContext, useLayoutEffect } from 'react';
import { AppStateContext } from '../AppContext';
import dbAPI from '../utils/dbAPI';
import Session from '../components/SessionVerification';
import Character from '../components/MyCharacters/CharacterCard';
import Buttons from '../components/Buttons';
import Modal from '../components/Modal';
import mailerAPI from '../utils/mailerAPI';

export default function ViewCampaign(props) {
    const context = useContext(AppStateContext);
    const [campaign, setCampaign] = useState();
    const [showInvite, setShowInvite] = useState(false);
    const [recipient, setRecipient] = useState();

    const getCampaign = () => {
        dbAPI.populateCampaignCharacters(props.match.params.id)
            .then(res => {
                setCampaign(res.data);
            });
    }

    const sendInvite = (event) => {
        event.preventDefault()
        const request = {
            recipient,
            campaignId: campaign._id,
            inviter: context.username
        }
        mailerAPI.mailInvite(request)
    }

    useLayoutEffect(getCampaign, [context])

    return (

        <Session>
            <div className="container grey lighten-2">
                {campaign ? (
                    <>
                        <h1>{campaign.name}</h1>
                        <Buttons title="Invite Players" clickThis={() => setShowInvite(true)} />
                        <div className="row">
                            {campaign.characters.map(char => <div className="col m4"><Character name={char.name} race={char.race} class={char.class} alignment={char.alignment} strength={char.stats.strength} dexterity={char.stats.dexterity} intelligence={char.stats.intelligence} charisma={char.stats.charisma} constitution={char.stats.constitution} wisdom={char.stats.wisdom} /></div>)}
                        </div>
                    </>
                ) : (
                        <h3>Loading</h3>
                    )}
            </div>
            {showInvite && (<Modal>
                <div className="container grey lighten-2" style={{padding: '1em'}}>
                    <form className="col s12">
                        <h3>Invite to party:</h3>
                        <h5>Enter the email address of who you would like to invite to this campaign</h5>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="usernameLogin"
                                    name="username"
                                    type="email"
                                    className="validate"
                                    value={recipient}
                                    onChange={event => setRecipient(event.target.value)}
                                />
                                <label
                                    htmlFor="username"
                                    className="black-text bold active"
                                >
                                    Email
                                </label>
                            </div>
                            <input
                                className="btn btnSignIn"
                                type="submit"
                                onClick={sendInvite}
                            />
                        </div>
                    </form>

                </div>
            </Modal>)}
        </Session>
    )
}