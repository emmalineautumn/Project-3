import React, { Component } from 'react';
import Builder from '../components/Builder';
import Character from '../components/Character';
import dbAPI from '../utils/dbAPI';
import UserSession from '../App'


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
        userId: ''
    }

    static contextType = UserSession;

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
        dbAPI.userSession().then(user => {
            let id = []
            for(let i = 0; i < user.data.length; i++) {
                id.push(user.data[i])
            }
            console.log(id.join(''))
            this.setState({ userId: id.join('') })
            
            character.userId = this.state.userId;
            
            dbAPI.createCharacterUser(character).then(res => {
                console.log(res);
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Builder updateCharacter={this.handleCharacterChange} character={this.state.character} submitAction={this.createCharacter} />
                    <Character character={this.state.character} />
                </div>
            </div>
        );
    }
}

export default CharacterBuilder;