import React, { Component } from 'react';
import Builder from '../components/Builder';
import Character from '../components/Character';

class CharacterBuilder extends Component {
    state = {
        character: {
            Name: "",
            Race: "",
            RaceID: 0,
            Class: "",
            ClassID: 0,
            Stats: {
                strength: '',
                constitution: '',
                dexterity: '',
                intelligence: '',
                wisdom: '',
                charisma: ''
            },
            Background: ""
        }
    }

    handleCharacterChange = (property, value) => {
        switch (property) {
            case 'strength':
            case 'constitution':
            case 'dexterity':
            case 'intelligence':
            case 'wisdom':
            case 'charisma':
                this.setState({
                    character: {
                        ...this.state.character,
                        Stats: {
                            ...this.state.character.Stats,
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

    render () {
        return (
            <div className="container">
                <div className="row">
                    <Builder updateCharacter={this.handleCharacterChange} character={this.state.character} />
                    <Character character={this.state.character} />
                </div>
            </div>
        );
    }
}

export default CharacterBuilder;