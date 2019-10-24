import React, { Component } from 'react'
import '../Builder';
import './Character.css';

class Character extends Component {
    state = {
        ClassImages: {
            Wizard: 'https://piskel-imgstore-b.appspot.com/img/72a8fa1c-f2f9-11e9-8294-1f4b6e958b6c.gif',
            Barbarian: 'https://piskel-imgstore-b.appspot.com/img/ff22b382-f3a0-11e9-8bf8-4715cb6b3dec.gif',
            Sorcerer: 'https://piskel-imgstore-b.appspot.com/img/10c5f391-f3a1-11e9-900c-4715cb6b3dec.gif',
            Warlock: 'https://piskel-imgstore-b.appspot.com/img/ad151d1e-f470-11e9-9278-e30591e86e81.gif',
            Druid: 'https://piskel-imgstore-b.appspot.com/img/5bf39ba8-f3a1-11e9-bed3-4715cb6b3dec.gif',
            Rogue: 'https://piskel-imgstore-b.appspot.com/img/69340030-f46e-11e9-9be9-e30591e86e81.gif',
            Ranger: 'https://piskel-imgstore-b.appspot.com/img/a2cb235c-f46e-11e9-9f62-e30591e86e81.gif',
            Monk: 'https://piskel-imgstore-b.appspot.com/img/c2861be8-f46e-11e9-9105-e30591e86e81.gif',
            Paladin: 'https://piskel-imgstore-b.appspot.com/img/776defc2-f46f-11e9-9d54-e30591e86e81.gif',
            Cleric: 'https://piskel-imgstore-b.appspot.com/img/8d47ae78-f46f-11e9-9618-e30591e86e81.gif',
            Fighter: 'https://piskel-imgstore-b.appspot.com/img/a0f70982-f46f-11e9-a0b9-e30591e86e81.gif',
            Bard: 'https://piskel-imgstore-b.appspot.com/img/bd23c3fd-f46f-11e9-95b2-e30591e86e81.gif',
        }      
    }
    render() {
        return (
            <div className="col l6">
                <div className="Character grey">
                    <div className="Character-image">
                        <img src={this.state.ClassImages[this.props.character.class]} alt="" />
                    </div>
                    <h1 className="Character-title">{this.props.character.name || "Character Name"}</h1>
                    <div style={{
                        fontFamily: 'Grenze'
                    }}>
                        <div className="Character-data">Gender: {this.props.character.gender}</div>
                        <div className="Character-data">Race: {this.props.character.race}</div>
                        <div className="Character-data">Class: {this.props.character.class}</div>
                        <div className="Character-data">Background: <p>{this.props.character.Background}</p></div>
                        {/* <div className="Character-data">Languages: {this.props.character.Languages}</div> */}
                        <div className="Character-data">Alignment: {this.props.character.alignment}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Character;