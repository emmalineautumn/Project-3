import React, {useState, useContext, useLayoutEffect} from 'react';
import {AppStateContext} from '../AppContext';
import dbAPI from '../utils/dbAPI';
import Session from '../components/SessionVerification';
import Character from '../components/MyCharacters/CharacterCard';
import Buttons from '../components/Buttons';
import Modal from '../components/Modal';

export default function ViewCampaign(props) {
    const context = useContext(AppStateContext);
    const [campaign, setCampaign] = useState();
    const [showInvite, setShowInvite] = useState(false);

    const getCampaign = () => {
        dbAPI.populateCampaignCharacters(props.match.params.id)
            .then(res => {
                setCampaign(res.data);
            });
    }

    useLayoutEffect(getCampaign, [context])

    return (
        
        <Session>
            <div className="container grey lighten-2">
                {campaign ? (
                    <>
                        <h1>{campaign.name}</h1>
                        <Buttons title="Invite Players" clickThis={()=>setShowInvite(true)} />
                        <div className="row">
                            {campaign.characters.map(char => <div className="col m4"><Character race={char.race} class={char.class} alignment={char.alignment} strength={char.stats.strength} dexterity={char.stats.dexterity} intelligence={char.stats.intelligence} charisma={char.stats.charisma}  constitution={char.stats.constitution} wisdom={char.stats.wisdom} /></div>)}
                        </div>
                    </>
                ) : (
                        <h3>Loading</h3>
                )}
            </div>
            {showInvite && (<Modal>
                {/* <set */}
            </Modal>)}
        </Session>
    )
}