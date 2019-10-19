import React, { Component } from 'react'
import '../Builder';
import './Character.css';


const CHAR_API = ""; 

class Character extends Component {
    render() {
        let imgSrc = `${CHAR_API}.png`;
        return (
          <div className="Character col l6 grey clearfix">
            <div className="Character-image">
              <img src={imgSrc} />
            </div>
            <h1 className="Character-title">Moar Wightbroad{}</h1>
            <div
              style={{
                fontFamily: "Grenze"
              }}
            >
              <div className="Character-data">Class: {}</div>
              <div className="Character-data">Race: {}</div>
              <div className="Character-data">Race: {}</div>
              <div className="Character-data">Gender: {}</div>
              <div className="Character-data">BG: {}</div>
              <div className="Character-data">Languages: {}</div>
              <div className="Character-data">Equipment: {}</div>
            </div>
          </div>
        );
    }
}

export default Character;