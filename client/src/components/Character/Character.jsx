import React, { Component } from 'react'
import '../Builder';
// import '../App.css';
import './Character.css';


const CHAR_API = ""; 

class Character extends Component {
    render() {
        let imgSrc = `${CHAR_API}.png`;
        return (
            <div className="Character ">
                <div className="Character-image">
                    <img src={imgSrc} />
                </div>
                <h1 className="Character-title">{this.props.character.Name || "Character Name"}</h1>
                <div style={{
                    fontFamily: 'Grenze'
                }}>
                    <div className="Character-data">Race: {this.props.character.Race}</div>
                    <div className="Character-data">Class: {this.props.character.Class}</div>
                    <div className="Character-data">Gender: {this.props.character.Gender}</div>
                    <div className="Character-data">Background: {this.props.character.Background}</div>
                    {/* <div className="Character-data">Languages: {this.props.character.Languages}</div> */}
                    <div className="Character-data">Equipment: {}</div>
                </div>
            </div>
        );
    }
}

export default Character;