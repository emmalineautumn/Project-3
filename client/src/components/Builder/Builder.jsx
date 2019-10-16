import React, { Component } from 'react'
import '../Character'; 
import "./Builder.css";

class Builder extends Component {
    render() {
        return (
          <div
            className="Builder">
            <h1
              className="Builder-title">
              Class:
            </h1>
            <div className="Builder-attributes">
              <div>
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