import React, { Component } from 'react'
import './Character'; 
import "../App.css";

class Builder extends Component {
    render() {
        return (
          <div
            className="Builder"
            style={{
              width: "500px",
              padding: "10px",
              margin: "1rem",
              boxShadow: "7px 10px 12px -5px",
              textAlign: "center",
              backgroundColor: "rgb(144, 144, 144)",
              borderRadius: "3px",
              float: "left",
              overflow: "hidden",
              marginTop: "5%",
              marginLeft: "10%",
                fontFamily: 'Grenze'

            }}
          >
            <h1
              className="Builder-title"
              style={{
                marginBotom: "1rem",
                fontWeight: "bold",
                color: "#B71C1C",
                fontSize: '2.5rem'
              }}
            >
              Class:
            </h1>
            <div className="Builder-attributes">
              <div
                style={{
                  color: "whitesmoke"
                }}
              >
                <div className="Builder-data">Class Jibberish: {}</div>
                <div className="Builder-data">Class Jibberish: {}</div>
                <div className="Builder-data">Class Jibberish: {}</div>
                <div className="Builder-data">Class Jibberish: {}</div>
              </div>
            </div>
            <div className="Builder-status">○ ○ ○ ○ {}</div>
          </div>
        );
    }
}

export default Builder;