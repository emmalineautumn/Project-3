import React, { Component } from 'react'
import './Builder';

const CHAR_API = ""; 

class Character extends Component {
    render() {
        let imgSrc = `${CHAR_API}.png`;
        return (
            <div className="Character" style={{ 
                backgroundColor: "rgb(144, 144, 144)",
                borderRadius: "3px",
                width: "500px",
                padding: "10px",
                margin: "1rem",
                boxShadow: "7px 10px 12px -5px",
                textAlign: "center",
                float: "right",
                overflow: "hidden",
                marginTop: "5%",
                marginLeft: "10%"
            }}>
                <div className="Character-image" style={{
                    justifyContent: 'center',
                    alignItems: 'center',
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