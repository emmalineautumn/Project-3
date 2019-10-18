import React, { Component } from 'react';
import Builder from '../components/Builder';
import Character from '../components/Character';

import API from '../utils/API';

class CharacterBuilder extends Component {
    state = {
        character: {
            Name: "",
            Race: "",
            RaceID: 0,
            Class: "",
            ClassID: 0,
            Stats: "",
            Background: "",
        }
    }

    handleCharacterChange = (property, value) => {
        this.setState({
            character: {
                ...this.state.character,
                [property]: value
            }
        });
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