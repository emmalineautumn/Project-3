import React, { Component } from 'react';
import Builder from '../components/Builder';
import Character from '../components/Character';
import dbAPI from '../utils/dbAPI';
import { AppStateContext } from '../AppContext';
import Session from '../components/SessionVerification';
import {Redirect} from 'react-router-dom';

class CharacterBuilder extends Component {
    state = {
        character: {
            name: "",
            race: "",
            RaceID: 0,
            class: "",
            ClassID: 0,
            stats: {
                strength: '',
                constitution: '',
                dexterity: '',
                intelligence: '',
                wisdom: '',
                charisma: ''
            },
            Background: "",
            alignment: "",
            npc: false,
        },
        redirect: ''
    }

    static contextType = AppStateContext;

    handleCharacterChange = (property, value) => {
        switch (property) {
            case 'strength':
            case 'constitution':
            case 'dexterity':
            case 'intelligence':
            case 'wisdom':
            case 'charisma':
                if (parseInt(value) > 18) {
                    value = 18;
                }
                this.setState({
                    character: {
                        ...this.state.character,
                        stats: {
                            ...this.state.character.stats,
                            [property]: parseInt(value)
                        }
                    }
                });
                break;
            default:
                this.setState({
                    character: {
                        ...this.state.character,
                        [property]: value
                    }
                });
        }
    }

    createCharacter = () => {
        const character = this.state.character;
        let id = []
        for(let i = 0; i < this.context.user.length; i++) {
            id.push(this.context.user[i])
        }

        character.userId = id.join('');
        character.campaignId = this.props.match.params.campaignId;

        dbAPI.createCharacterUser(character).then(res => {
            this.setState({redirect: '/mycharacters'})
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirect }} />
        } else {
            return (
                <Session>
                    <div className="container">
                        <div className="row">
                            <Builder updateCharacter={this.handleCharacterChange} character={this.state.character} submitAction={this.createCharacter} />
                            <Character character={this.state.character} />
                        </div>
                    </div>
                </Session>
            );
        }
    }
}

export default CharacterBuilder;