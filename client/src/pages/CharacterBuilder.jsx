import React, { Component } from 'react';
import Builder from '../components/Builder';
import Character from '../components/Character';

import API from '../utils/API';

class CharacterBuilder extends Component {
    state = {
        character: {
            name: "",
            race: 18,
            class: 0,
            baseStats: [],
            description: "",
            backStory: ""
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
                    <Builder updateCharacter={this.handleCharacterChange} />
                    <Character character={this.state.character} />
                </div>
            </div>
        );
    }
}

export default CharacterBuilder;