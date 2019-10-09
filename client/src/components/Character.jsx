import React, { Component } from 'react'
import './Builder';

const CHAR_API = ""; 

class Character extends Component {
    render() {
        let imgSrc = `${CHAR_API}.png`;
        return (
            <div className="Character">
                <div className="Character-image" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#050505',
                    borderRadius: '3px',
                    marginBottom: '1rem'
                }}>
                <img src={imgSrc} />
            </div>
            <h1 className="Character-title" style={{
                marginBotom: '1rem',
                fontWeight: 'bold',
                fontSize: '2.5rem',
                color: '#B71C1C'
            }}>Moar Wightbroad{}</h1>
                <div className="Character-data">Class: {}</div>
                <div className="Character-data">Race: {}</div>
                <div className="Character-data">Race: {}</div>
                <div className="Character-data">Gender: {}</div>
                <div className="Character-data">BG: {}</div>
                <div className="Character-data">Languages: {}</div>
                <div className="Character-data">Equipment: {}</div>
          </div>
        );
    }
}

export default Character;