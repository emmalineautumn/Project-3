import React, { Component } from 'react'
import Buttons from '../components/Buttons'

class Home extends Component {
    render() {
        return (
            <div class="container">
                <div className="row" style={{ height: "25vh" }}></div>
                <div className="row">
                    <div className="col s12 m6 l6">
                        <Buttons title="Start Campaign" />
                    </div>
                    <div className="col s12 m6 l6">
                        <Buttons title="Join Campaign" />
                    </div>
                </div>
                <div className="row center-align">
                    <Buttons title="Feeling Lucky?" />
                </div>
            </div>
        );
    }
}

export default Home